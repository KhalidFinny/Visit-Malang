import { useState, useEffect } from "react";
import type { PlaceCashAdvisorProps } from "../types";

export default function PlaceCashAdvisor({ slug, fees: initialFees }: PlaceCashAdvisorProps) {
  const [fees, setFees] = useState(initialFees);
  const [isForeigner, setIsForeigner] = useState(false);
  const [showReportForm, setShowReportForm] = useState(false);

  // Form states
  const [domesticInput, setDomesticInput] = useState(initialFees.domestic_entry.toString());
  const [foreignInput, setForeignInput] = useState(initialFees.foreign_entry.toString());
  const [transportInput, setTransportInput] = useState(initialFees.transport_cost.toString());
  const [parkingInput, setParkingInput] = useState(initialFees.parking_cost.toString());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync state if initialFees changes
  useEffect(() => {
    setFees(initialFees);
    setDomesticInput(initialFees.domestic_entry.toString());
    setForeignInput(initialFees.foreign_entry.toString());
    setTransportInput(initialFees.transport_cost.toString());
    setParkingInput(initialFees.parking_cost.toString());
    setSubmitSuccess(false);
    setShowReportForm(false);
  }, [initialFees]);

  const entryCost = isForeigner ? fees.foreign_entry : fees.domestic_entry;
  const totalCost = fees.parking_cost + fees.transport_cost + entryCost;

  const handleSubmitReport = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/fees/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          slug,
          domestic_entry: parseInt(domesticInput) || 0,
          foreign_entry: parseInt(foreignInput) || 0,
          transport_cost: parseInt(transportInput) || 0,
          parking_cost: parseInt(parkingInput) || 0
        })
      });
      const result = await res.json();
      if (result.success && result.updated) {
        setFees(prev => ({
          ...prev,
          domestic_entry: result.updated.domestic_entry,
          foreign_entry: result.updated.foreign_entry,
          transport_cost: result.updated.transport_cost,
          parking_cost: result.updated.parking_cost
        }));
        setSubmitSuccess(true);
        setTimeout(() => {
          setShowReportForm(false);
          setSubmitSuccess(false);
        }, 3000);
      }
    } catch (err) {
      console.error("Failed to report price update:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="p-6 rounded-3xl border border-white/[0.06] bg-white/[0.01]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-5 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7a9e64]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#7a9e64]">
              Cash Planner
            </span>
          </div>
          <h4 className="text-lg font-bold text-white uppercase tracking-tight">
            Estimated Cash Required
          </h4>
        </div>
        
        {/* Local vs Foreign toggle */}
        <div className="flex items-center bg-white/[0.04] border border-white/[0.08] p-1 rounded-xl shrink-0 self-start md:self-auto">
          <button
            onClick={() => setIsForeigner(false)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              !isForeigner 
                ? 'bg-[#7a9e64] text-white' 
                : 'text-white/40 hover:text-white/70 bg-transparent'
            }`}
          >
            Local / Domestic
          </button>
          <button
            onClick={() => setIsForeigner(true)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              isForeigner 
                ? 'bg-[#7a9e64] text-white' 
                : 'text-white/40 hover:text-white/70 bg-transparent'
            }`}
          >
            Foreigner
          </button>
        </div>
      </div>

      {/* Calculations Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-6">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs text-white/65 font-bold uppercase tracking-wider">Entrance Ticket</span>
          <span className="text-xl font-extrabold text-white">
            IDR {entryCost.toLocaleString()}
          </span>
        </div>

        {fees.transport_cost > 0 && (
          <div className="flex flex-col gap-0.5">
            <span className="text-xs text-white/65 font-bold uppercase tracking-wider">Mandatory Transport</span>
            <span className="text-xl font-extrabold text-white">
              IDR {fees.transport_cost.toLocaleString()}
            </span>
          </div>
        )}

        <div className="flex flex-col gap-0.5">
          <span className="text-xs text-white/65 font-bold uppercase tracking-wider">Parking & Fees</span>
          <span className="text-xl font-extrabold text-white">
            IDR {fees.parking_cost.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Total and Notes */}
      <div className="flex flex-col lg:flex-row gap-5 pt-5 border-t border-white/[0.06] bg-transparent">
        <div className="lg:w-1/3 flex flex-col justify-center bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl">
          <span className="text-xs text-white/65 font-bold uppercase tracking-wider mb-1">Recommended Reserve</span>
          <span className="text-2xl font-black text-[#7a9e64] tracking-tight">
            IDR {totalCost.toLocaleString()}
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-3.5">
          <div>
            <h5 className="text-xs font-bold text-white/80 uppercase tracking-wider mb-1">Logistics Note</h5>
            <p className="text-sm text-white/60 leading-relaxed font-normal">{fees.notes}</p>
          </div>
          <div>
            <h5 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">ATM Availability Warning</h5>
            <p className="text-sm text-white/60 leading-relaxed font-normal">{fees.atm_info}</p>
          </div>
        </div>
      </div>

      {/* Report Button */}
      <div className="mt-5 flex justify-end">
        <button
          onClick={() => setShowReportForm(!showReportForm)}
          className="text-xs font-semibold text-white/50 hover:text-white/90 underline cursor-pointer transition-all"
        >
          {showReportForm ? "Close Price Report" : "Report a Ticket/Jeep Price Change"}
        </button>
      </div>

      {/* Report Form */}
      {showReportForm && (
        <form onSubmit={handleSubmitReport} className="mt-5 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
          <h5 className="text-xs font-bold text-white uppercase tracking-wider">
            Report Local Price Correction
          </h5>
          <p className="text-[11px] text-white/60 leading-normal">
            Help other travelers! Input the price you actually paid. The live cost index updates automatically using a calculated median of recent submissions.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-white/60 uppercase">Domestic Entry (IDR)</label>
              <input
                type="number"
                value={domesticInput}
                onChange={e => setDomesticInput(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#7a9e64]"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-white/60 uppercase">Foreigner Entry (IDR)</label>
              <input
                type="number"
                value={foreignInput}
                onChange={e => setForeignInput(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#7a9e64]"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-white/60 uppercase">Transport Cost (IDR)</label>
              <input
                type="number"
                value={transportInput}
                onChange={e => setTransportInput(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#7a9e64]"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-white/60 uppercase">Parking Cost (IDR)</label>
              <input
                type="number"
                value={parkingInput}
                onChange={e => setParkingInput(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#7a9e64]"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 pt-2">
            {submitSuccess ? (
              <span className="text-xs font-bold text-emerald-400">✓ Submitted! Thank you for updating the price index!</span>
            ) : (
              <span className="text-xs text-white/40">Prices are aggregated automatically</span>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#7a9e64] hover:bg-[#6c8c56] disabled:bg-white/10 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all cursor-pointer"
            >
              {isSubmitting ? "Submitting..." : "Submit Price Update"}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
