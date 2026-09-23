import React, { useState } from 'react';
import { useHeritage } from '../../context/HeritageContext';
import { HeritageSubmission } from '../../types';
import { VerifiedBadge } from '../common/VerifiedBadge';
import { 
  UploadCloud, 
  ShieldCheck, 
  FileText, 
  Mic, 
  Image as ImageIcon, 
  Video, 
  Heart, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Send,
  Sparkles,
  Award
} from 'lucide-react';

export const DocumentHeritage: React.FC = () => {
  const { submissions, submitHeritage, likeSubmission, playChime } = useHeritage();

  // Form State
  const [title, setTitle] = useState('');
  const [traditionType, setTraditionType] = useState('Oral Folklore & Lullabies');
  const [state, setState] = useState('Madhya Pradesh');
  const [district, setDistrict] = useState('');
  const [community, setCommunity] = useState('');
  const [story, setStory] = useState('');
  const [mediaType, setMediaType] = useState<'photo' | 'audio' | 'video' | 'text'>('text');
  const [contributorName, setContributorName] = useState('');
  const [contributorRole, setContributorRole] = useState('Student Researcher, SIH 2026');
  const [consentConfirmed, setConsentConfirmed] = useState(false);
  const [rightsProtected, setRightsProtected] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !story || !consentConfirmed || !rightsProtected) return;

    submitHeritage({
      title,
      traditionType,
      state,
      district: district || 'Local Taluk',
      community: community || 'Community Elders',
      story,
      mediaType,
      contributorName: contributorName || 'Anonymous Student Researcher',
      contributorRole,
      consentConfirmed,
      indigenousRightsProtected: rightsProtected
    });

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setTitle('');
      setDistrict('');
      setCommunity('');
      setStory('');
      setConsentConfirmed(false);
      setRightsProtected(false);
    }, 3000);
  };

  const traditionCategories = [
    'Oral Folklore & Lullabies',
    'Vanishing Craft & Handloom Technique',
    'Indigenous Bio-Architecture & Sacred Groves',
    'Folk Instrument & Ritual Rhythm',
    'Grandmother\'s Medicinal & Culinary Recipes',
    'Dying Local Dialects & Proverbs'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <UploadCloud className="w-3.5 h-3.5 text-amber-600" />
              Community Heritage Documentation Portal
            </span>
            <VerifiedBadge sourceName="UNESCO 2003 Convention on Intangible Heritage" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-black text-stone-900">
            Preserve Your Region's Living Lore
          </h1>
          <p className="text-stone-600 text-sm mt-1">
            Crowdsourcing oral histories, fading dialects, and indigenous craft secrets with scholar moderation and ethical community consent.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Submission Form */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-lg space-y-6">
          
          <div className="border-b border-stone-100 pb-4">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Document Living Heritage
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Submissions undergo AI authenticity pre-checks and peer review by cultural scholars.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-serif text-xl font-bold text-emerald-950">
                Documentation Inscribed!
              </h4>
              <p className="text-xs text-emerald-800">
                Your submission has entered the national moderation pipeline. You have earned <strong>+150 XP</strong> and the <strong>"Heritage Guardian"</strong> badge!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Title */}
              <div>
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                  Title of Tradition / Living Folklore: *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vanishing Lullabies of Chambal Valley"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                />
              </div>

              {/* Category & State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                    Tradition Domain:
                  </label>
                  <select
                    value={traditionType}
                    onChange={(e) => setTraditionType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-200 bg-[#FAF7F2] text-xs font-semibold focus:outline-none"
                  >
                    {traditionCategories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                    State / Region:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tamil Nadu, Assam"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-[#FAF7F2] text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* District & Community */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                    District / Village:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Thanjavur / Majuli"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-[#FAF7F2] text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                    Community / Clan / Tribe:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Khatri weavers, Khasi elders"
                    value={community}
                    onChange={(e) => setCommunity(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-[#FAF7F2] text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Story Narrative Text */}
              <div>
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                  Living Oral History / Narrative Description: *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Record the oral folklore, songs, steps of the craft, or biological remedies passed down through generations..."
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                />
              </div>

              {/* Media Type Selector */}
              <div>
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                  Supporting Cultural Evidence:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'photo', label: 'Photo', icon: <ImageIcon className="w-4 h-4" /> },
                    { id: 'audio', label: 'Audio Rec', icon: <Mic className="w-4 h-4" /> },
                    { id: 'video', label: 'Video', icon: <Video className="w-4 h-4" /> },
                    { id: 'text', label: 'Manuscript', icon: <FileText className="w-4 h-4" /> }
                  ].map(m => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMediaType(m.id as any)}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                        mediaType === m.id
                          ? 'bg-terracotta-600 text-white border-terracotta-600 shadow-sm'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {m.icon}
                      <span>{m.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contributor Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Student Researcher"
                    value={contributorName}
                    onChange={(e) => setContributorName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-[#FAF7F2] text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                    College / Institute:
                  </label>
                  <input
                    type="text"
                    value={contributorRole}
                    onChange={(e) => setContributorRole(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-[#FAF7F2] text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Ethics, Consent & Indigenous Rights Checkboxes */}
              <div className="space-y-2.5 pt-2 border-t border-stone-100 text-xs text-stone-600">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={consentConfirmed}
                    onChange={(e) => setConsentConfirmed(e.target.checked)}
                    className="mt-0.5 rounded text-terracotta-600 focus:ring-terracotta-500"
                  />
                  <span>
                    <strong>Informed Community Consent:</strong> I confirm that the knowledge-holders/community elders have given informed consent to document and digitally safeguard this living tradition.
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={rightsProtected}
                    onChange={(e) => setRightsProtected(e.target.checked)}
                    className="mt-0.5 rounded text-terracotta-600 focus:ring-terracotta-500"
                  />
                  <span>
                    <strong>Indigenous Rights & TKDL Protection:</strong> This submission respects traditional cultural expressions and protects against unauthorized commercial patenting.
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={!consentConfirmed || !rightsProtected || !title.trim()}
                className={`w-full py-4 rounded-2xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                  consentConfirmed && rightsProtected && title.trim()
                    ? 'bg-terracotta-600 hover:bg-terracotta-700 text-white'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>Submit to National Cultural Archive (+150 XP)</span>
              </button>

            </form>
          )}

        </div>

        {/* Right Column: Verification Status Pipeline & Public Archive */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Moderation Pipeline Infographic */}
          <div className="bg-stone-900 text-white rounded-3xl p-6 border border-stone-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                Verification & Moderation Engine
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/50">
                Active Pipeline
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-stone-800 border border-stone-700">
                <div className="text-amber-400 font-bold mb-1">1. Ingestion</div>
                <div className="text-[10px] text-stone-400">Consent Verified</div>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-800 border border-stone-700">
                <div className="text-cyan-400 font-bold mb-1">2. AI Pre-check</div>
                <div className="text-[10px] text-stone-400">RAG Plagiarism & Fact</div>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-800 border border-stone-700">
                <div className="text-purple-400 font-bold mb-1">3. Scholar Board</div>
                <div className="text-[10px] text-stone-400">ASI / IGNCA Review</div>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-950 border border-emerald-600">
                <div className="text-emerald-400 font-bold mb-1">4. Archival</div>
                <div className="text-[10px] text-emerald-200">National Repository</div>
              </div>
            </div>
          </div>

          {/* Living Community Archive Feed */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Community Living Archive ({submissions.length})
              </h3>
              <span className="text-xs text-stone-500">Student & Citizen Entries</span>
            </div>

            <div className="space-y-4 max-h-[560px] overflow-y-auto pr-1">
              {submissions.map(item => (
                <div key={item.id} className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        {item.traditionType}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-stone-900 mt-1">
                        {item.title}
                      </h4>
                      <div className="text-xs text-stone-500">
                        {item.district}, {item.state} • {item.community}
                      </div>
                    </div>

                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border flex-shrink-0 ${
                      item.verificationStatus === 'ASI Archived'
                        ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                        : item.verificationStatus === 'Scholar Verified'
                        ? 'bg-blue-100 text-blue-900 border-blue-300'
                        : item.verificationStatus === 'AI Authenticated'
                        ? 'bg-purple-100 text-purple-900 border-purple-300'
                        : 'bg-amber-100 text-amber-900 border-amber-300'
                    }`}>
                      {item.verificationStatus}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic bg-stone-50 p-3 rounded-xl border border-stone-100">
                    "{item.story}"
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs text-stone-500">
                    <div>
                      Documented by <strong>{item.contributorName}</strong> ({item.contributorRole})
                    </div>

                    <button
                      onClick={() => likeSubmission(item.id)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold transition-colors"
                    >
                      <Heart className="w-3.5 h-3.5 fill-rose-500" />
                      <span>{item.likes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
