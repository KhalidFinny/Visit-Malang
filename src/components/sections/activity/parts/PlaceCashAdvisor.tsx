import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faCar, faParking, faFlag } from "@fortawesome/free-solid-svg-icons";
import type { PlaceCashAdvisorProps } from "../types";

export default function PlaceCashAdvisor({ slug, fees: initialFees }: PlaceCashAdvisorProps) {
  const [fees, setFees] = useState(initialFees);
  const [isForeigner, setIsForeigner] = useState(false);
  const [showReportForm, setShowReportForm] = useState(false);
  const [domesticInput, setDomesticInput] = useState(initialFees.domestic_entry.toString());
  const [foreignInput, setForeignInput] = useState(initialFees.foreign_entry.toString());
  const [transportInput, setTransportInput] = useState(initialFees.transport_cost.toString());
  const [parkingInput, setParkingInput] = useState(initialFees.parking_cost.toString());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setFees(initialFees);
    setDomesticInput(initialFees.domestic_entry.toString());
    setForeignInput(initialFees.foreign_entry.toString());
    setTransportInput(initialFees.transport_cost.toString());
    setParkingInput(initialFees.parking_cost.toString());
    setSubmitSuccess(false); setShowReportForm(false);
  }, [initialFees]);

  const entryCost = isForeigner ? fees.foreign_entry : fees.domestic_entry;
  const totalCost = fees.parking_cost + fees.transport_cost + entryCost;

  const handleSubmitReport = async (e: React.FormEvent) => {
    e.preventDefault(); setIsSubmitting(true);
    try {
      const res = await fetch("/api/fees/report", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ slug, domestic_entry: parseInt(domesticInput) || 0, foreign_entry: parseInt(foreignInput) || 0, transport_cost: parseInt(transportInput) || 0, parking_cost: parseInt(parkingInput) || 0 }) });
      const result = await res.json();
      if (result.success && result.updated) {
        setFees(p => ({ ...p, domestic_entry: result.updated.domestic_entry, foreign_entry: result.updated.foreign_entry, transport_cost: result.updated.transport_cost, parking_cost: result.updated.parking_cost }));
        setSubmitSuccess(true); setTimeout(() => { setShowReportForm(false); setSubmitSuccess(false); }, 3000);
      }
    } catch (err) { console.error(err); } finally { setIsSubmitting(false); }
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center gap-2 mb-4">
        <FontAwesomeIcon icon={faWallet} className="text-sm text-[#A3B18A]" />
        <span className="text-sm font-bold uppercase tracking-widest text-[#A3B18A]">Cash Planner</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/5">
        <h4 className="text-lg font-bold text-white uppercase tracking-tight">Estimated Cash Required</h4>
        <div className="flex items-center bg-[#121212] border border-white/5 p-1 rounded-xl shrink-0 self-start sm:self-auto">
          <button onClick={() => setIsForeigner(false)}
            className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${!isForeigner ? 'bg-[#A3B18A] text-white' : 'text-white/50 hover:text-white bg-transparent'}`}>Domestic</button>
          <button onClick={() => setIsForeigner(true)}
            className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${isForeigner ? 'bg-[#A3B18A] text-white' : 'text-white/50 hover:text-white bg-transparent'}`}>Foreigner</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-5">
        <div><span className="text-sm text-white/50 font-bold uppercase tracking-wider">Entrance Ticket</span><p className="text-xl font-extrabold text-white mt-0.5">IDR {entryCost.toLocaleString()}</p></div>
        {fees.transport_cost > 0 && <div><span className="text-sm text-white/50 font-bold uppercase tracking-wider"><FontAwesomeIcon icon={faCar} className="mr-1.5 text-[10px]" />Transport</span><p className="text-xl font-extrabold text-white mt-0.5">IDR {fees.transport_cost.toLocaleString()}</p></div>}
        <div><span className="text-sm text-white/50 font-bold uppercase tracking-wider"><FontAwesomeIcon icon={faParking} className="mr-1.5 text-[10px]" />Parking & Fees</span><p className="text-xl font-extrabold text-white mt-0.5">IDR {fees.parking_cost.toLocaleString()}</p></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-5 border-t border-white/5">
        <div className="lg:w-1/3 bg-[#121212] border border-white/5 p-5 rounded-xl"><span className="text-sm text-white/50 font-bold uppercase tracking-wider block mb-1">Recommended Reserve</span><span className="text-2xl font-black text-[#A3B18A] tracking-tight">IDR {totalCost.toLocaleString()}</span></div>
        <div className="flex-1 space-y-3">
          <div><h5 className="text-sm font-bold text-white/70 uppercase tracking-wider mb-1">Logistics Note</h5><p className="text-sm text-white/50 leading-relaxed">{fees.notes}</p></div>
          <div><h5 className="text-sm font-bold text-rose-400 uppercase tracking-wider mb-1"><FontAwesomeIcon icon={faFlag} className="mr-1.5 text-[10px]" />ATM Availability</h5><p className="text-sm text-white/50 leading-relaxed">{fees.atm_info}</p></div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button onClick={() => setShowReportForm(!showReportForm)} className="text-sm font-medium text-white/40 hover:text-white underline transition-all cursor-pointer">{showReportForm ? "Close" : "Report a price change"}</button>
      </div>
      {showReportForm && (
        <form onSubmit={handleSubmitReport} className="mt-5 p-5 rounded-xl bg-[#121212] border border-white/5 space-y-4">
          <h5 className="text-sm font-bold text-white uppercase tracking-wider">Report Price Correction</h5>
          <p className="text-sm text-white/50 leading-normal">Input the price you actually paid.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ label: "Domestic Entry", v: domesticInput, s: setDomesticInput }, { label: "Foreigner Entry", v: foreignInput, s: setForeignInput }, { label: "Transport Cost", v: transportInput, s: setTransportInput }, { label: "Parking Cost", v: parkingInput, s: setParkingInput }].map((f, i) => (
              <div key={i}><label className="text-sm font-bold text-white/50 uppercase block mb-1">{f.label} (IDR)</label><input type="number" value={f.v} onChange={e => f.s(e.target.value)} className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#A3B18A]" required /></div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-4 pt-2">
            {submitSuccess ? <span className="text-sm font-bold text-emerald-400">Submitted! Thank you!</span> : <span className="text-sm text-white/40">Prices aggregated automatically</span>}
            <button type="submit" disabled={isSubmitting} className="bg-[#A3B18A] hover:bg-[#8a9e75] disabled:bg-white/10 text-white text-sm font-bold px-4 py-2 rounded-xl transition-all cursor-pointer">{isSubmitting ? "Submitting..." : "Submit"}</button>
          </div>
        </form>
      )}
    </div>
  );
}
