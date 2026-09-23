import React, { useState, useRef, useEffect } from 'react';
import { useHeritage } from '../../context/HeritageContext';
import { VerifiedBadge } from '../common/VerifiedBadge';
import { 
  Palette, 
  Sparkles, 
  Download, 
  Save, 
  RotateCcw, 
  Layers, 
  Check, 
  Flame, 
  Scissors, 
  Grid,
  Circle,
  Square,
  Award
} from 'lucide-react';

export const HeritageLab: React.FC = () => {
  const { playChime, playSuccessChime, saveCreation, addXP } = useHeritage();

  type StudioType = 'kolam' | 'pattern' | 'pottery' | 'textile';
  const [activeStudio, setActiveStudio] = useState<StudioType>('kolam');

  // ==========================================
  // 1. KOLAM & RANGOLI STUDIO STATE & LOGIC
  // ==========================================
  const kolamCanvasRef = useRef<HTMLCanvasElement>(null);
  const [kolamColor, setKolamColor] = useState<string>('#FAF5EE');
  const [kolamBrushSize, setKolamBrushSize] = useState<number>(4);
  const [kolamSymmetry, setKolamSymmetry] = useState<number>(8); // 4-fold or 8-fold
  const [showDotGrid, setShowDotGrid] = useState<boolean>(true);
  const [isDrawingKolam, setIsDrawingKolam] = useState<boolean>(false);

  const kolamPigments = [
    { name: 'Rice Flour White', color: '#FAF5EE', border: 'border-stone-400' },
    { name: 'Turmeric Gold', color: '#F59E0B', border: 'border-amber-500' },
    { name: 'Kumkum Vermilion', color: '#C85A32', border: 'border-red-600' },
    { name: 'Peacock Indigo', color: '#2563EB', border: 'border-blue-600' },
    { name: 'Forest Green', color: '#059669', border: 'border-emerald-600' },
  ];

  // Initialize Kolam Canvas
  const drawKolamBackground = () => {
    const canvas = kolamCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Sacred terracotta floor background
    ctx.fillStyle = '#6E2A14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle stone texture
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    for (let i = 0; i < 400; i++) {
      ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
    }

    // Optional Dot Grid (Pulli Kolam)
    if (showDotGrid) {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const spacing = 38;
      ctx.fillStyle = 'rgba(250, 245, 238, 0.45)';

      for (let x = -4; x <= 4; x++) {
        for (let y = -4; y <= 4; y++) {
          ctx.beginPath();
          ctx.arc(cx + x * spacing, cy + y * spacing, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  };

  useEffect(() => {
    if (activeStudio === 'kolam') {
      drawKolamBackground();
    }
  }, [activeStudio, showDotGrid]);

  const handleKolamMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawingKolam(true);
    drawSymmetricStroke(e);
  };

  const handleKolamMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawingKolam) return;
    drawSymmetricStroke(e);
  };

  const handleKolamMouseUp = () => {
    setIsDrawingKolam(false);
  };

  const drawSymmetricStroke = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = kolamCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const dx = x - cx;
    const dy = y - cy;

    ctx.fillStyle = kolamColor;
    ctx.strokeStyle = kolamColor;
    ctx.lineWidth = kolamBrushSize;
    ctx.lineCap = 'round';

    const symmetryAngle = (Math.PI * 2) / kolamSymmetry;

    for (let i = 0; i < kolamSymmetry; i++) {
      const angle = i * symmetryAngle;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      // Rotated point
      const rx = cx + (dx * cos - dy * sin);
      const ry = cy + (dx * sin + dy * cos);

      ctx.beginPath();
      ctx.arc(rx, ry, kolamBrushSize / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const handleSaveKolam = () => {
    const canvas = kolamCanvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    saveCreation({
      type: 'kolam',
      title: `Sacred ${kolamSymmetry}-Fold Symmetry Kolam`,
      dataUrl,
      metadata: { symmetry: `${kolamSymmetry}-Fold`, colorsUsed: [kolamColor] }
    });
  };

  // ==========================================
  // 2. TRADITIONAL BLOCK PRINT STUDIO
  // ==========================================
  const [stampedBlocks, setStampedBlocks] = useState<Array<{ x: number; y: number; block: string; color: string; rotation: number }>>([]);
  const [selectedBlockMotif, setSelectedBlockMotif] = useState<string>('elephant');
  const [blockColor, setBlockColor] = useState<string>('#1E3A8A'); // Indigo

  const blockMotifs = [
    { id: 'elephant', name: 'Royal Hathi (Elephant)', symbol: '🐘' },
    { id: 'paisley', name: 'Kalka (Paisley/Mango)', symbol: '🥭' },
    { id: 'lotus', name: 'Padma (Sacred Lotus)', symbol: '🪷' },
    { id: 'tree', name: 'Kalpavriksha (Tree of Life)', symbol: '🌳' },
    { id: 'star', name: 'Ajrakh Geometric Star', symbol: '✦' },
  ];

  const handleCanvasStamp = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    playChime();
    setStampedBlocks(prev => [
      ...prev,
      { x, y, block: selectedBlockMotif, color: blockColor, rotation: (prev.length * 15) % 360 }
    ]);
  };

  const handleSaveBlockPrint = () => {
    saveCreation({
      type: 'blockprint',
      title: `Ajrakh & Bagru Stamped Fabric (${stampedBlocks.length} motifs)`,
      dataUrl: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80',
      metadata: { colorsUsed: [blockColor] }
    });
  };

  // ==========================================
  // 3. VIRTUAL POTTERY STUDIO
  // ==========================================
  const [potteryWidths, setPotteryWidths] = useState<number[]>([40, 50, 75, 90, 85, 60, 45]);
  const [potteryGlaze, setPotteryGlaze] = useState<string>('terracotta');
  const [isFiringKiln, setIsFiringKiln] = useState<boolean>(false);
  const [potteryFired, setPotteryFired] = useState<boolean>(false);

  const glazes = [
    { id: 'terracotta', name: 'Terracotta Red Clay', color: '#9A3412', texture: 'from-amber-700 via-orange-800 to-amber-950' },
    { id: 'blue', name: 'Jaipur Blue Turquoise', color: '#0284C7', texture: 'from-sky-500 via-blue-700 to-indigo-950' },
    { id: 'black', name: 'Nizamabad Smoked Black', color: '#27272A', texture: 'from-stone-700 via-stone-800 to-black' },
    { id: 'sandstone', name: 'Khajuraho Sandstone', color: '#D97706', texture: 'from-amber-500 via-amber-600 to-stone-800' }
  ];

  const handleAdjustPottery = (index: number, delta: number) => {
    setPotteryWidths(prev => {
      const next = [...prev];
      next[index] = Math.max(25, Math.min(110, next[index] + delta));
      return next;
    });
  };

  const handleFireKiln = () => {
    playSuccessChime();
    setIsFiringKiln(true);
    setTimeout(() => {
      setIsFiringKiln(false);
      setPotteryFired(true);
      addXP(60, 'Fired hand-sculpted ceramic vessel in Heritage Kiln');
    }, 2200);
  };

  const handleSavePottery = () => {
    saveCreation({
      type: 'pottery',
      title: `Handcrafted ${glazes.find(g => g.id === potteryGlaze)?.name} Urn`,
      dataUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80',
      metadata: { glaze: potteryGlaze }
    });
  };

  // ==========================================
  // 4. TEXTILE & ZARI WEAVE STUDIO
  // ==========================================
  const [warpColor, setWarpColor] = useState<string>('#991B1B'); // Crimson Silk
  const [zariDensity, setZariDensity] = useState<'low' | 'medium' | 'high'>('medium');
  const [borderType, setBorderType] = useState<string>('temple');
  const [weaveLines, setWeaveLines] = useState<number>(14);

  const handleSaveTextile = () => {
    saveCreation({
      type: 'textile',
      title: `Kanchipuram Silk with ${zariDensity.toUpperCase()} Zari Brocade`,
      dataUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
      metadata: { weaveDensity: zariDensity }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-purple-600" />
              Future Heritage Lab • Interactive Creative Studios
            </span>
            <VerifiedBadge sourceName="National Institute of Design & Craft Councils" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-black text-stone-900">
            Artisanal Hands-On Digital Studios
          </h1>
          <p className="text-stone-600 text-sm mt-1">
            Design sacred geometric Kolams, stamp traditional woodblock textiles, lathe-spin terracotta pottery, and weave brocades.
          </p>
        </div>

        {/* Studio Tabs Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 bg-stone-100 p-1.5 rounded-2xl border border-stone-200">
          {[
            { id: 'kolam' as StudioType, label: 'Kolam Creator', icon: '✨' },
            { id: 'pattern' as StudioType, label: 'Block Printing', icon: '🪵' },
            { id: 'pottery' as StudioType, label: 'Virtual Pottery', icon: '🏺' },
            { id: 'textile' as StudioType, label: 'Textile Loom', icon: '🧵' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                playChime();
                setActiveStudio(tab.id);
              }}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeStudio === tab.id
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* STUDIO 1: SACRED KOLAM & RANGOLI CREATOR */}
      {/* ======================================================== */}
      {activeStudio === 'kolam' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Bar */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Kolam Sacred Canvas Controls
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Utilizes dihedral mathematical symmetry inspired by South Indian threshold drawings.
              </p>
            </div>

            {/* Pigment Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Natural Pigment:
              </label>
              <div className="grid grid-cols-5 gap-2">
                {kolamPigments.map(pigment => (
                  <button
                    key={pigment.name}
                    onClick={() => {
                      playChime();
                      setKolamColor(pigment.color);
                    }}
                    style={{ backgroundColor: pigment.color }}
                    className={`h-10 rounded-xl border-2 transition-transform ${pigment.border} ${
                      kolamColor === pigment.color ? 'scale-110 shadow-md ring-2 ring-terracotta-500' : 'opacity-80 hover:opacity-100'
                    }`}
                    title={pigment.name}
                  />
                ))}
              </div>
            </div>

            {/* Symmetry Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Rotational Symmetry:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[4, 8, 12].map(sym => (
                  <button
                    key={sym}
                    onClick={() => {
                      playChime();
                      setKolamSymmetry(sym);
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      kolamSymmetry === sym
                        ? 'bg-terracotta-600 text-white border-terracotta-600 shadow-sm'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {sym}-Fold Symmetrical
                  </button>
                ))}
              </div>
            </div>

            {/* Dot Grid Toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-xs font-semibold text-stone-700">Show Pulli Dot Grid</span>
              <button
                onClick={() => {
                  playChime();
                  setShowDotGrid(prev => !prev);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                  showDotGrid ? 'bg-emerald-600 text-white' : 'bg-stone-200 text-stone-600'
                }`}
              >
                {showDotGrid ? 'Visible' : 'Hidden'}
              </button>
            </div>

            {/* Brush Size Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-stone-700">
                <span>Stroke Weight</span>
                <span>{kolamBrushSize}px</span>
              </div>
              <input
                type="range"
                min="2"
                max="12"
                value={kolamBrushSize}
                onChange={(e) => setKolamBrushSize(parseInt(e.target.value, 10))}
                className="w-full accent-terracotta-600"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <button
                onClick={handleSaveKolam}
                className="w-full py-3.5 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Save to Heritage Portfolio (+75 XP)</span>
              </button>

              <button
                onClick={() => {
                  playChime();
                  drawKolamBackground();
                }}
                className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Canvas</span>
              </button>
            </div>

            {/* Scholarly Fact */}
            <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 text-[11px] text-amber-900 leading-relaxed">
              <strong>Mathematical Heritage:</strong> Kolam matrices represent Eulerian closed loops studied by computer scientists for fractal array grammars.
            </div>

          </div>

          {/* Interactive Canvas Area */}
          <div className="lg:col-span-8 flex flex-col items-center">
            <div className="relative p-3 bg-stone-900 rounded-3xl shadow-2xl border-4 border-amber-900/60 max-w-full">
              <canvas
                ref={kolamCanvasRef}
                width={560}
                height={560}
                onMouseDown={handleKolamMouseDown}
                onMouseMove={handleKolamMouseMove}
                onMouseUp={handleKolamMouseUp}
                onMouseLeave={handleKolamMouseUp}
                className="rounded-2xl cursor-crosshair max-w-full h-auto touch-none shadow-inner"
              />

              <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-amber-300 pointer-events-none">
                {kolamSymmetry}-Fold Real-Time Mirror Drawing
              </div>
            </div>

            <p className="text-xs text-stone-500 mt-3 text-center">
              Click & drag across the terracotta board to generate sacred geometric symmetry in real time.
            </p>
          </div>

        </div>
      )}

      {/* ======================================================== */}
      {/* STUDIO 2: TRADITIONAL BLOCK PRINT STUDIO */}
      {/* ======================================================== */}
      {activeStudio === 'pattern' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Wooden Block Print Studio
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Authentic motifs inspired by Ajrakhpur (Kutch) and Bagru (Rajasthan).
              </p>
            </div>

            {/* Select Wooden Stamp Motif */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Teak Wood Block Motif:
              </label>
              <div className="space-y-2">
                {blockMotifs.map(motif => (
                  <button
                    key={motif.id}
                    onClick={() => {
                      playChime();
                      setSelectedBlockMotif(motif.id);
                    }}
                    className={`w-full p-3 rounded-2xl border text-left text-xs font-bold transition-all flex items-center gap-3 ${
                      selectedBlockMotif === motif.id
                        ? 'bg-amber-50 border-amber-500 text-stone-950 shadow-sm'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <span className="text-2xl">{motif.symbol}</span>
                    <span>{motif.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dye Vat Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Natural Dye Vat Color:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { name: 'Indigo Blue', color: '#1E3A8A' },
                  { name: 'Madder Red', color: '#991B1B' },
                  { name: 'Harda Ochre', color: '#B45309' },
                  { name: 'Syahi Black', color: '#18181B' }
                ].map(dye => (
                  <button
                    key={dye.name}
                    onClick={() => {
                      playChime();
                      setBlockColor(dye.color);
                    }}
                    style={{ backgroundColor: dye.color }}
                    className={`h-10 rounded-xl border-2 transition-all ${
                      blockColor === dye.color ? 'ring-2 ring-terracotta-500 scale-105' : 'opacity-80'
                    }`}
                    title={dye.name}
                  />
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 space-y-2">
              <button
                onClick={handleSaveBlockPrint}
                className="w-full py-3.5 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Fabric Creation (+75 XP)</span>
              </button>

              <button
                onClick={() => {
                  playChime();
                  setStampedBlocks([]);
                }}
                className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Fabric</span>
              </button>
            </div>
          </div>

          {/* Stamping Fabric Canvas Area */}
          <div className="lg:col-span-8 flex flex-col items-center">
            <div
              onClick={handleCanvasStamp}
              className="relative w-full h-[520px] bg-[#FAF3E0] rounded-3xl border-4 border-dashed border-amber-300 shadow-xl overflow-hidden cursor-crosshair p-6 select-none"
              style={{
                backgroundImage: 'radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            >
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[11px] font-bold text-stone-700 pointer-events-none">
                Click anywhere to stamp the wooden block on Khadi cloth
              </div>

              {/* Stamped Motifs */}
              {stampedBlocks.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'absolute',
                    left: item.x - 24,
                    top: item.y - 24,
                    transform: `rotate(${item.rotation}deg)`,
                    color: item.color
                  }}
                  className="text-4xl animate-bounce-in pointer-events-none drop-shadow-md select-none"
                >
                  {blockMotifs.find(m => m.id === item.block)?.symbol || '✦'}
                </div>
              ))}
            </div>

            <p className="text-xs text-stone-500 mt-3 text-center">
              Stamped {stampedBlocks.length} motifs. Master block printers maintain exact rhythmic pressure using wooden mallets.
            </p>
          </div>

        </div>
      )}

      {/* ======================================================== */}
      {/* STUDIO 3: VIRTUAL POTTERY STUDIO */}
      {/* ======================================================== */}
      {activeStudio === 'pottery' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Virtual Potter's Wheel & Kiln
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Pinch and shape revolving river clay, apply natural glazes, and bake in the sacred kiln.
              </p>
            </div>

            {/* Glaze Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Ceramic Glaze & Clay Type:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {glazes.map(glz => (
                  <button
                    key={glz.id}
                    onClick={() => {
                      playChime();
                      setPotteryGlaze(glz.id);
                    }}
                    className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all ${
                      potteryGlaze === glz.id
                        ? 'bg-amber-50 border-amber-500 text-stone-950 shadow-sm'
                        : 'bg-stone-50 border-stone-200 text-stone-700'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full mb-1.5" style={{ backgroundColor: glz.color }} />
                    <span className="truncate block">{glz.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Clay Shaping Controls */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Adjust Lathe Contours:
              </label>

              {['Rim Flare', 'Neck Pinch', 'Shoulder Curve', 'Belly Swell', 'Waist', 'Base Foot'].map((part, idx) => (
                <div key={part} className="flex items-center justify-between text-xs bg-stone-50 p-2 rounded-xl">
                  <span className="font-semibold text-stone-700">{part}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleAdjustPottery(idx, -8)}
                      className="w-6 h-6 rounded-lg bg-white border border-stone-300 font-bold hover:bg-stone-100 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-mono w-8 text-center">{potteryWidths[idx]}</span>
                    <button
                      onClick={() => handleAdjustPottery(idx, 8)}
                      className="w-6 h-6 rounded-lg bg-white border border-stone-300 font-bold hover:bg-stone-100 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Fire in Kiln Action */}
            <div className="pt-2 space-y-2">
              <button
                onClick={handleFireKiln}
                disabled={isFiringKiln}
                className={`w-full py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                  isFiringKiln
                    ? 'bg-orange-500 text-white animate-pulse'
                    : 'bg-gradient-to-r from-orange-600 to-red-700 text-white hover:from-orange-700 hover:to-red-800'
                }`}
              >
                <Flame className="w-4 h-4" />
                <span>{isFiringKiln ? 'Baking in Kiln (1,050°C)...' : 'Fire in Traditional Kiln'}</span>
              </button>

              <button
                onClick={handleSavePottery}
                className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-all flex items-center justify-center gap-2"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Pottery to Portfolio (+75 XP)</span>
              </button>
            </div>

          </div>

          {/* Rotating Clay Lathe Area */}
          <div className="lg:col-span-8 flex flex-col items-center">
            <div className={`relative w-full h-[520px] rounded-3xl border border-stone-800 shadow-2xl flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ${
              isFiringKiln ? 'bg-gradient-to-t from-red-950 via-orange-950 to-stone-950' : 'bg-stone-900'
            }`}>
              
              {/* Rotating Potter's Wheel Base */}
              <div className="absolute bottom-10 w-72 h-16 rounded-[100%] bg-stone-800 border-4 border-amber-600/40 shadow-2xl animate-spin-slow flex items-center justify-center">
                <div className="w-20 h-6 rounded-[100%] bg-stone-900 border border-amber-500/50" />
              </div>

              {/* Symmetric Clay Urn Visualization */}
              <div className="relative z-10 flex flex-col items-center gap-1.5 mb-14">
                {potteryWidths.map((w, idx) => (
                  <div
                    key={idx}
                    style={{ width: `${w * 2.8}px` }}
                    className={`h-9 rounded-2xl bg-gradient-to-r ${
                      glazes.find(g => g.id === potteryGlaze)?.texture
                    } shadow-md transition-all duration-300 border-y border-white/10`}
                  />
                ))}
              </div>

              {/* Kiln Heat particles if firing */}
              {isFiringKiln && (
                <div className="absolute inset-0 bg-orange-600/20 backdrop-blur-[2px] flex items-center justify-center pointer-events-none animate-pulse">
                  <div className="text-center text-white">
                    <Flame className="w-12 h-12 text-amber-400 mx-auto animate-bounce" />
                    <span className="font-serif font-black text-2xl tracking-wider text-amber-200">
                      Firing Clay in Kiln
                    </span>
                  </div>
                </div>
              )}

              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-amber-400">
                {potteryFired ? '✓ Kiln Fired Ceramic Masterpiece' : 'Raw Revolving Clay Form'}
              </div>
            </div>

            <p className="text-xs text-stone-500 mt-3 text-center">
              Simulates traditional hand-turned earthenware practiced across Kumartuli and Khurja.
            </p>
          </div>

        </div>
      )}

      {/* ======================================================== */}
      {/* STUDIO 4: TEXTILE & ZARI WEAVE STUDIO */}
      {/* ======================================================== */}
      {activeStudio === 'textile' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Handloom & Zari Loom Simulator
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Warp & weft intertwining inspired by Kanchipuram and Banarasi silk master-weavers.
              </p>
            </div>

            {/* Base Silk Warp Color */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Pure Mulberry Silk Warp:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { name: 'Kanjivaram Crimson', color: '#991B1B' },
                  { name: 'Peacock Teal', color: '#0F766E' },
                  { name: 'Deep Royal Purple', color: '#581C87' },
                  { name: 'Mustard Raw Silk', color: '#B45309' }
                ].map(s => (
                  <button
                    key={s.name}
                    onClick={() => {
                      playChime();
                      setWarpColor(s.color);
                    }}
                    style={{ backgroundColor: s.color }}
                    className={`h-10 rounded-xl border-2 transition-all ${
                      warpColor === s.color ? 'ring-2 ring-terracotta-500 scale-105' : 'opacity-80'
                    }`}
                    title={s.name}
                  />
                ))}
              </div>
            </div>

            {/* Real Gold Zari Density */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Zari (Gold Thread) Density:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['low', 'medium', 'high'] as const).map(density => (
                  <button
                    key={density}
                    onClick={() => {
                      playChime();
                      setZariDensity(density);
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold uppercase transition-all ${
                      zariDensity === density
                        ? 'bg-amber-500 text-stone-950 font-black shadow-sm'
                        : 'bg-stone-50 text-stone-700 border border-stone-200'
                    }`}
                  >
                    {density}
                  </button>
                ))}
              </div>
            </div>

            {/* Shuttle Weave Trigger */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  playChime();
                  setWeaveLines(prev => Math.min(28, prev + 2));
                  addXP(10, 'Passed the wooden shuttle on the handloom');
                }}
                className="w-full py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold text-xs flex items-center justify-center gap-2"
              >
                <span>Throw Shuttle Weave (+1 Row)</span>
              </button>
            </div>

            {/* Actions */}
            <div className="pt-2 space-y-2">
              <button
                onClick={handleSaveTextile}
                className="w-full py-3.5 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Silk Swatch (+75 XP)</span>
              </button>
            </div>

            <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200 text-[11px] text-amber-900 leading-relaxed">
              <strong>Weaving Geometry:</strong> The Korvai technique requires two weavers sitting side-by-side to throw shuttles in synchronization.
            </div>

          </div>

          {/* Textile Loom Swatch Area */}
          <div className="lg:col-span-8 flex flex-col items-center">
            <div 
              style={{ backgroundColor: warpColor }}
              className="relative w-full h-[520px] rounded-3xl border-4 border-amber-400/40 shadow-2xl p-6 overflow-hidden flex flex-col justify-between"
            >
              {/* Gold Temple Border Spikes */}
              <div className="flex justify-between items-center border-b-2 border-amber-300 pb-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-amber-300" />
                ))}
              </div>

              {/* Warp and Weft Rows */}
              <div className="flex-1 my-4 flex flex-col justify-around">
                {Array.from({ length: weaveLines }).map((_, r) => {
                  const hasZari = zariDensity === 'high' ? true : zariDensity === 'medium' ? r % 2 === 0 : r % 4 === 0;
                  return (
                    <div
                      key={r}
                      style={{
                        backgroundColor: hasZari ? '#F59E0B' : 'rgba(255,255,255,0.2)',
                        boxShadow: hasZari ? '0 0 8px rgba(245, 158, 11, 0.6)' : 'none'
                      }}
                      className="h-1.5 w-full rounded-full transition-all"
                    />
                  );
                })}
              </div>

              {/* Lower Zari Pallu */}
              <div className="p-4 bg-amber-500/20 backdrop-blur-md rounded-2xl border border-amber-300/50 flex items-center justify-between text-white text-xs font-bold">
                <span>Korvai Heavy Contrast Zari Pallu</span>
                <span className="text-amber-200">100% Pure Mulberry Silk</span>
              </div>
            </div>

            <p className="text-xs text-stone-500 mt-3 text-center">
              Interlocking warp threads with micro-electroplated gold zari wire.
            </p>
          </div>

        </div>
      )}

    </div>
  );
};
