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
    <div className="p-5 md:p-7 xl:p-8 font-sans">
      <div className="flex items-center gap-2 mb-4">
        <FontAwesomeIcon icon={faWallet} className="text-sm text-[#A3B18A]" />
        <span className="text-swiss text-sm font-black tracking-[0.08em] uppercase text-[#A3B18A]">Cash Planner</span>
      </div>
      <div className="flex flex-col gap-4 pb-5 border-b border-[#2D221F]/10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <h4 className="text-xl md:text-2xl font-black text-editorial text-[#2D221F] uppercase tracking-tight leading-[0.95] text-balance max-w-[14ch]">
            Estimated Cash Required
          </h4>
          <div className="flex flex-wrap items-center bg-[#f5f4f0] border border-[#2D221F]/10 p-1 rounded-xl gap-1 self-start">
            <button
              onClick={() => setIsForeigner(false)}
              className={`px-3.5 py-2 rounded-lg text-swiss text-sm font-black tracking-[0.08em] uppercase transition-all cursor-pointer ${!isForeigner ? 'bg-[#A3B18A] text-white shadow-sm' : 'text-[#2D221F]/50 hover:text-[#2D221F] bg-transparent'}`}
            >
              Domestic
            </button>
            <button
              onClick={() => setIsForeigner(true)}
              className={`px-3.5 py-2 rounded-lg text-swiss text-sm font-black tracking-[0.08em] uppercase transition-all cursor-pointer ${isForeigner ? 'bg-[#A3B18A] text-white shadow-sm' : 'text-[#2D221F]/50 hover:text-[#2D221F] bg-transparent'}`}
            >
              Foreigner
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
        <div className="rounded-xl border border-[#2D221F]/10 bg-[#faf9f5] p-4 md:p-5">
          <span className="text-swiss text-sm font-black tracking-[0.08em] uppercase text-[#2D221F]/40 block mb-2">Entrance Ticket</span>
          <p className="text-xl md:text-2xl font-black text-editorial text-[#2D221F] leading-none">IDR {entryCost.toLocaleString()}</p>
        </div>
        {fees.transport_cost > 0 && (
          <div className="rounded-xl border border-[#2D221F]/10 bg-[#faf9f5] p-4 md:p-5">
            <span className="text-swiss text-sm font-black tracking-[0.08em] uppercase text-[#2D221F]/40 block mb-2">
              <FontAwesomeIcon icon={faCar} className="mr-1.5 text-sm" />
              Transport
            </span>
            <p className="text-xl md:text-2xl font-black text-editorial text-[#2D221F] leading-none">IDR {fees.transport_cost.toLocaleString()}</p>
          </div>
        )}
        <div className={`${fees.transport_cost > 0 ? "md:col-span-2" : ""} rounded-xl border border-[#2D221F]/10 bg-[#faf9f5] p-4 md:p-5`}>
          <span className="text-swiss text-sm font-black tracking-[0.08em] uppercase text-[#2D221F]/40 block mb-2">
            <FontAwesomeIcon icon={faParking} className="mr-1.5 text-sm" />
            Parking & Fees
          </span>
          <p className="text-xl md:text-2xl font-black text-editorial text-[#2D221F] leading-none">IDR {fees.parking_cost.toLocaleString()}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[minmax(200px,240px)_1fr] gap-6 pt-6 border-t border-[#2D221F]/10 items-start">
        <div className="bg-[#f5f4f0] border border-[#2D221F]/10 p-5 md:p-6 rounded-xl flex flex-col justify-center">
          <span className="text-swiss text-sm font-black tracking-[0.08em] uppercase text-[#2D221F]/40 block mb-2">Recommended Reserve</span>
          <span className="text-3xl md:text-4xl font-black text-editorial text-[#A3B18A] tracking-tight leading-none block text-balance">IDR {totalCost.toLocaleString()}</span>
        </div>
        <div className="space-y-5">
          <div>
            <h5 className="text-swiss text-sm font-black tracking-[0.08em] uppercase text-[#2D221F]/40 mb-2">Logistics Note</h5>
            <p className="text-sm md:text-base text-[#2D221F]/70 leading-7 font-medium text-pretty">{fees.notes}</p>
          </div>
          <div>
            <h5 className="text-swiss text-sm font-black tracking-[0.08em] uppercase text-rose-600 mb-2">
              <FontAwesomeIcon icon={faFlag} className="mr-1.5 text-sm" />
              ATM Availability
            </h5>
            <p className="text-sm md:text-base text-[#2D221F]/70 leading-7 font-medium text-pretty">{fees.atm_info}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-start md:justify-end">
        <button onClick={() => setShowReportForm(!showReportForm)} className="text-sm font-black tracking-[0.08em] uppercase text-[#2D221F]/45 hover:text-[#A3B18A] transition-all cursor-pointer underline underline-offset-4">
          {showReportForm ? "Close Form" : "Report a price change"}
        </button>
      </div>
      {showReportForm && (
        <form onSubmit={handleSubmitReport} className="mt-5 p-5 rounded-xl bg-[#f5f4f0] border border-[#2D221F]/10 space-y-4">
          <div>
            <h5 className="text-swiss text-sm font-black tracking-[0.08em] uppercase text-[#2D221F] mb-1">Report Price Correction</h5>
            <p className="text-sm md:text-base text-[#2D221F]/60 leading-relaxed font-medium">Input the price you actually paid. Submissions are aggregated automatically.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[{ label: "Domestic Entry", v: domesticInput, s: setDomesticInput }, { label: "Foreigner Entry", v: foreignInput, s: setForeignInput }, { label: "Transport Cost", v: transportInput, s: setTransportInput }, { label: "Parking Cost", v: parkingInput, s: setParkingInput }].map((f, i) => (
              <div key={i}>
                <label className="text-swiss text-sm font-black tracking-[0.08em] uppercase text-[#2D221F]/40 block mb-1.5">{f.label} (IDR)</label>
                <input
                  type="number"
                  value={f.v}
                  onChange={e => f.s(e.target.value)}
                  className="w-full bg-white border border-[#2D221F]/15 rounded-lg px-3 py-2 text-sm text-[#2D221F] focus:outline-none focus:border-[#A3B18A] focus:ring-1 focus:ring-[#A3B18A]/20 transition-all font-semibold"
                  required
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
            {submitSuccess ? <span className="text-sm font-black tracking-wider uppercase text-[#A3B18A] font-swiss">Submitted! Thank you!</span> : <span className="text-sm text-[#2D221F]/40 font-semibold font-swiss">Prices aggregated automatically</span>}
            <button type="submit" disabled={isSubmitting} className="bg-[#2D221F] hover:bg-[#A3B18A] disabled:bg-[#2D221F]/10 text-white text-sm font-black tracking-[0.08em] uppercase px-6 py-3 rounded-full transition-all cursor-pointer">
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
