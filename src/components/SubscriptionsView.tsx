import React, { useState } from 'react';
import { SUBSCRIPTION_PLANS } from '../data/subscriptions';
import { SubscriptionPlan } from '../types';
import { Check, ShieldCheck, Sparkles, CreditCard, Award, ArrowLeft, Download, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SubscriptionsViewProps {
  onBack: () => void;
  isSubscribed: boolean;
  onSubscribeSuccess: (planName: string) => void;
}

export const SubscriptionsView: React.FC<SubscriptionsViewProps> = ({
  onBack,
  isSubscribed,
  onSubscribeSuccess,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [memberName, setMemberName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'briciole'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [membershipBadge, setMembershipBadge] = useState<string | null>(null);

  const handleOpenCheckout = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
  };

  const handleConfirmPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      onSubscribeSuccess(selectedPlan?.name || 'Cattivo Gusto VIP');
      
      // Fire celebratory confetti!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      const badgeNumber = Math.floor(100000 + Math.random() * 900000);
      setMembershipBadge(badgeNumber.toString());
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-24 animate-in fade-in duration-200">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8 border-b-2 border-black pb-4">
        <button
          onClick={onBack}
          className="bg-black text-white px-4 py-2 font-anton text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-[#A0FF00] hover:text-black border-2 border-black transition shadow-[3px_3px_0px_#000]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>TORNA ALLA RIVISTA</span>
        </button>

        <span className="bg-[#A0FF00] text-black font-anton text-xs sm:text-sm px-3 py-1 border-2 border-black uppercase tracking-widest font-bold">
          ABBONAMENTI UFFICIALI 2026
        </span>
      </div>

      {/* Main Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-black mb-3">
          FINANZIA L'ASSURDO
        </h1>
        <p className="font-typewriter text-sm sm:text-base text-neutral-700 leading-relaxed">
          Nessuna promessa di crescita personale. Nessuna newsletter motivazionale del lunedì. 
          Scegli il livello di supporto che il tuo tostapane riterrà più idoneo.
        </p>
      </div>

      {/* Already Subscribed Banner */}
      {isSubscribed && (
        <div className="bg-[#A0FF00] border-3 border-black p-6 mb-10 shadow-[6px_6px_0px_#000] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award className="w-10 h-10 text-black shrink-0" />
            <div>
              <h3 className="font-anton text-2xl uppercase text-black">SEI GIÀ UN MEMBRO VIP DEL CAOS!</h3>
              <p className="font-typewriter text-xs text-neutral-900">
                Hai accesso illimitato agli articoli segreti e ai privilegi dell'Alter Ego.
              </p>
            </div>
          </div>
          <button
            onClick={() => setMembershipBadge(Math.floor(100000 + Math.random() * 900000).toString())}
            className="bg-black text-[#A0FF00] px-5 py-2.5 font-anton text-sm uppercase border-2 border-black hover:bg-white hover:text-black transition shadow-[2px_2px_0px_#000]"
          >
            MOSTRA LA MIA TESSERA DIGITAL
          </button>
        </div>
      )}

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
        {SUBSCRIPTION_PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`border-3 border-black p-6 flex flex-col justify-between relative transition-all ${
              plan.isPopular 
                ? 'bg-white shadow-[8px_8px_0px_#A0FF00] md:-translate-y-2' 
                : 'bg-[#FAF8F5] shadow-[5px_5px_0px_#000]'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#A0FF00] text-black border-2 border-black font-anton text-xs px-4 py-1 uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000]">
                {plan.badge}
              </div>
            )}

            <div>
              <span className="font-anton text-xs text-neutral-500 uppercase tracking-widest block mb-1">
                {!plan.isPopular && plan.badge}
              </span>

              <h3 className="font-anton text-3xl uppercase tracking-tight text-black mb-3">
                {plan.name}
              </h3>

              <div className="mb-4 pb-4 border-b-2 border-black flex items-baseline gap-1">
                <span className="font-anton text-4xl sm:text-5xl text-black">{plan.price}</span>
                <span className="font-typewriter text-xs text-neutral-600">{plan.billingPeriod}</span>
              </div>

              <p className="font-typewriter text-xs text-neutral-700 leading-relaxed mb-6">
                {plan.description}
              </p>

              {/* Perks list */}
              <ul className="space-y-3 mb-8 font-typewriter text-xs">
                {plan.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-2 text-neutral-800">
                    <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handleOpenCheckout(plan)}
              className={`w-full py-3 font-anton text-base uppercase border-2 border-black transition shadow-[3px_3px_0px_#000] active:translate-x-0.5 ${
                plan.isPopular
                  ? 'bg-[#A0FF00] text-black hover:bg-black hover:text-[#A0FF00]'
                  : 'bg-black text-white hover:bg-[#A0FF00] hover:text-black'
              }`}
            >
              {plan.callToAction}
            </button>
          </div>
        ))}
      </div>

      {/* Simulated Checkout Modal */}
      {selectedPlan && !membershipBadge && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#F4F1EA] border-4 border-black p-6 sm:p-8 w-full max-w-lg shadow-[10px_10px_0px_#000] relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 bg-black text-white px-2 py-1 font-mono text-xs border-2 border-black hover:bg-[#A0FF00] hover:text-black"
            >
              CHIUDI X
            </button>

            <span className="bg-[#A0FF00] text-black font-anton text-xs px-2.5 py-1 border border-black uppercase mb-2 inline-block">
              CASSA SURREALE
            </span>

            <h2 className="font-anton text-3xl uppercase tracking-tight mb-1">
              {selectedPlan.name}
            </h2>
            <p className="font-mono text-sm text-neutral-600 mb-6">
              Totale da corrispondere: <strong className="text-black text-lg">{selectedPlan.price}</strong> {selectedPlan.billingPeriod}
            </p>

            <form onSubmit={handleConfirmPayment} className="space-y-4">
              <div>
                <label className="block font-anton text-sm uppercase mb-1">
                  NOME SULLA TESSERA DI ALTER EGO
                </label>
                <input
                  type="text"
                  required
                  placeholder="Es. Prof. Mario Disperato"
                  value={memberName}
                  onChange={(e) => setMemberName(e.target.value)}
                  className="w-full bg-white border-2 border-black p-3 font-mono text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-anton text-sm uppercase mb-1">
                  METODO DI PAGAMENTO
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 border-2 border-black font-anton text-xs uppercase flex items-center justify-center gap-2 ${
                      paymentMethod === 'card' ? 'bg-[#A0FF00] text-black font-bold' : 'bg-white'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>CARTA FANTASMA</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('briciole')}
                    className={`p-3 border-2 border-black font-anton text-xs uppercase flex items-center justify-center gap-2 ${
                      paymentMethod === 'briciole' ? 'bg-[#A0FF00] text-black font-bold' : 'bg-white'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>BRICIOLE DI PANE</span>
                  </button>
                </div>
              </div>

              {paymentMethod === 'card' ? (
                <div className="space-y-3 bg-white border-2 border-black p-4 font-mono text-xs">
                  <div>
                    <label className="block text-[10px] uppercase text-neutral-500 mb-1">NUMERO DI CARTA SIMULATA</label>
                    <input
                      type="text"
                      defaultValue="4242 •••• •••• 4242"
                      readOnly
                      className="w-full bg-neutral-100 border border-black p-2 font-mono text-xs"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] uppercase text-neutral-500 mb-1">SCADENZA</label>
                      <input type="text" defaultValue="12/99" readOnly className="w-full bg-neutral-100 border border-black p-2 font-mono text-xs" />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase text-neutral-500 mb-1">CVC</label>
                      <input type="text" defaultValue="000" readOnly className="w-full bg-neutral-100 border border-black p-2 font-mono text-xs" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-[#FFFEEB] border-2 border-black p-4 font-typewriter text-xs leading-relaxed text-neutral-800">
                  🍞 Hai selezionato il pagamento in Briciole. Riconosci solennemente che farai cadere almeno 3 briciole sul divano prima di domenica.
                </div>
              )}

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-black text-[#A0FF00] font-anton text-lg py-3 uppercase border-2 border-black hover:bg-[#A0FF00] hover:text-black transition shadow-[4px_4px_0px_#000] flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>ELABORAZIONE NEL CAOS...</span>
                  </>
                ) : (
                  <span>CONFERMA E PAGA ORA</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Generated Digital Badge Modal */}
      {membershipBadge && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF8F5] border-4 border-black p-6 sm:p-8 w-full max-w-md shadow-[10px_10px_0px_#A0FF00] text-center relative">
            <button
              onClick={() => {
                setMembershipBadge(null);
                setSelectedPlan(null);
              }}
              className="absolute top-4 right-4 bg-black text-white px-2 py-1 font-mono text-xs border-2 border-black"
            >
              CHIUDI X
            </button>

            <span className="bg-[#A0FF00] text-black font-anton text-xs px-3 py-1 border border-black uppercase mb-3 inline-block">
              TESSERA DIGITALE UFFICIALE
            </span>

            {/* Visual Badge Card */}
            <div className="bg-black text-[#F4F1EA] border-3 border-black p-6 shadow-[6px_6px_0px_#000] my-4 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#A0FF00]/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-anton text-2xl text-[#A0FF00] uppercase tracking-tight">
                    CATTIVO GUSTO VIP
                  </h3>
                  <span className="font-typewriter text-[10px] text-neutral-400 block">
                    MEMBRO ONORARIO DELL'ALTER EGO
                  </span>
                </div>
                <Award className="w-8 h-8 text-[#A0FF00]" />
              </div>

              <div className="space-y-2 mb-6 font-mono text-xs">
                <div>
                  <span className="text-neutral-500 block text-[9px] uppercase">INTESTATARIO</span>
                  <p className="font-anton text-lg text-white uppercase">{memberName || 'Cittadino Anonimo'}</p>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[9px] uppercase">CODICE RICONOSCIMENTO</span>
                  <p className="font-bold text-[#A0FF00]">CG-{membershipBadge}-2026</p>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800 flex justify-between items-center text-[10px] font-mono text-neutral-400">
                <span>STATO: ATTIVO</span>
                <span>DATA: {new Date().toLocaleDateString('it-IT')}</span>
              </div>
            </div>

            <p className="font-typewriter text-xs text-neutral-700 mb-6">
              Mostra questa tessera al tuo tostapane per ottenere rispetto immediato.
            </p>

            <button
              onClick={() => alert("Tessera salvata nella memoria volatile del tuo browser!")}
              className="w-full bg-[#A0FF00] text-black border-2 border-black py-2.5 font-anton text-base uppercase flex items-center justify-center gap-2 hover:bg-black hover:text-[#A0FF00] transition shadow-[3px_3px_0px_#000]"
            >
              <Download className="w-4 h-4" />
              <span>SALVA TESSERA SUL DISPOSITIVO</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
