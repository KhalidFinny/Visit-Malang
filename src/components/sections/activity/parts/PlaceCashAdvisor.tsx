import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faCar, faParking, faFlag } from "@fortawesome/free-solid-svg-icons";
import type { PlaceCashAdvisorProps } from "../types";

export default function PlaceCashAdvisor({ fees: initialFees }: PlaceCashAdvisorProps) {
  const { t } = useTranslation();
  const [fees, setFees] = useState(initialFees);
  const [isForeigner, setIsForeigner] = useState(false);
  const [showReportForm, setShowReportForm] = useState(false);
  const [domesticInput, setDomesticInput] = useState(initialFees.domestic_entry.toString());
  const [foreignInput, setForeignInput] = useState(initialFees.foreign_entry.toString());
  const [transportInput, setTransportInput] = useState(initialFees.transport_cost.toString());
  const [parkingInput, setParkingInput] = useState(initialFees.parking_cost.toString());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    setFees(initialFees);
    setDomesticInput(initialFees.domestic_entry.toString());
    setForeignInput(initialFees.foreign_entry.toString());
    setTransportInput(initialFees.transport_cost.toString());
    setParkingInput(initialFees.parking_cost.toString());
    setSubmitSuccess(false);
    setSubmitError(null);
    setShowReportForm(false);
  }, [initialFees]);

  const entryCost = isForeigner ? fees.foreign_entry : fees.domestic_entry;
  const totalCost = fees.parking_cost + fees.transport_cost + entryCost;

  const handleSubmitReport = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);
    try {
      throw new Error(t("placeDetail.cash.reportUnavailable"));
    } catch (err) {
      if (err instanceof Error) {
        setSubmitError(err.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    { label: t("placeDetail.cash.fields.domesticEntry"), value: domesticInput, setValue: setDomesticInput },
    { label: t("placeDetail.cash.fields.foreignerEntry"), value: foreignInput, setValue: setForeignInput },
    { label: t("placeDetail.cash.fields.transportCost"), value: transportInput, setValue: setTransportInput },
    { label: t("placeDetail.cash.fields.parkingCost"), value: parkingInput, setValue: setParkingInput },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 font-sans">
      <div className="flex items-center gap-2 mb-4">
        <FontAwesomeIcon icon={faWallet} className="text-sm text-[#A3B18A]" />
        <span className="text-swiss text-[10px] font-black tracking-[0.15em] uppercase text-[#A3B18A]">{t("placeDetail.cash.label")}</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#2D221F]/10">
        <h4 className="text-xl md:text-2xl font-black text-editorial text-[#2D221F] uppercase tracking-tight">{t("placeDetail.cash.title")}</h4>
        <div className="flex items-center bg-[#f5f4f0] border border-[#2D221F]/10 p-1 rounded-xl shrink-0 self-start sm:self-auto">
          <button onClick={() => setIsForeigner(false)}
            className={`px-3 py-1.5 rounded-lg text-swiss text-[9px] font-black tracking-[0.15em] uppercase transition-all cursor-pointer ${!isForeigner ? 'bg-[#A3B18A] text-white shadow-sm' : 'text-[#2D221F]/50 hover:text-[#2D221F] bg-transparent'}`}>{t("placeDetail.cash.traveler.domestic")}</button>
          <button onClick={() => setIsForeigner(true)}
            className={`px-3 py-1.5 rounded-lg text-swiss text-[9px] font-black tracking-[0.15em] uppercase transition-all cursor-pointer ${isForeigner ? 'bg-[#A3B18A] text-white shadow-sm' : 'text-[#2D221F]/50 hover:text-[#2D221F] bg-transparent'}`}>{t("placeDetail.cash.traveler.foreigner")}</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-6">
        <div>
          <span className="text-swiss text-[9px] font-black tracking-[0.15em] uppercase text-[#2D221F]/40 block mb-1">{t("placeDetail.cash.entranceTicket")}</span>
          <p className="text-xl font-black text-editorial text-[#2D221F] mt-1">IDR {entryCost.toLocaleString()}</p>
        </div>
        {fees.transport_cost > 0 && (
          <div>
            <span className="text-swiss text-[9px] font-black tracking-[0.15em] uppercase text-[#2D221F]/40 block mb-1">
              <FontAwesomeIcon icon={faCar} className="mr-1.5 text-[10px]" />{t("placeDetail.cash.transport")}
            </span>
            <p className="text-xl font-black text-editorial text-[#2D221F] mt-1">IDR {fees.transport_cost.toLocaleString()}</p>
          </div>
        )}
        <div>
          <span className="text-swiss text-[9px] font-black tracking-[0.15em] uppercase text-[#2D221F]/40 block mb-1">
            <FontAwesomeIcon icon={faParking} className="mr-1.5 text-[10px]" />{t("placeDetail.cash.parkingFees")}
          </span>
          <p className="text-xl font-black text-editorial text-[#2D221F] mt-1">IDR {fees.parking_cost.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 pt-6 border-t border-[#2D221F]/10">
        <div className="lg:w-1/3 bg-[#f5f4f0] border border-[#2D221F]/10 p-5 rounded-xl flex flex-col justify-center">
          <span className="text-swiss text-[9px] font-black tracking-[0.15em] uppercase text-[#2D221F]/40 block mb-2">{t("placeDetail.cash.recommendedReserve")}</span>
          <span className="text-3xl font-black text-editorial text-[#A3B18A] tracking-tight leading-none block">IDR {totalCost.toLocaleString()}</span>
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <h5 className="text-swiss text-[9px] font-black tracking-[0.15em] uppercase text-[#2D221F]/40 mb-1">{t("placeDetail.cash.logisticsNote")}</h5>
            <p className="text-xs text-[#2D221F]/60 leading-relaxed font-semibold">{fees.notes}</p>
          </div>
          <div>
            <h5 className="text-swiss text-[9px] font-black tracking-[0.15em] uppercase text-rose-600 mb-1">
              <FontAwesomeIcon icon={faFlag} className="mr-1.5 text-[10px]" />{t("placeDetail.cash.atmAvailability")}
            </h5>
            <p className="text-xs text-[#2D221F]/60 leading-relaxed font-semibold">{fees.atm_info}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button onClick={() => setShowReportForm(!showReportForm)} className="text-[9px] font-black tracking-[0.15em] uppercase text-[#2D221F]/40 hover:text-[#A3B18A] transition-all cursor-pointer underline">
          {showReportForm ? t("placeDetail.cash.closeForm") : t("placeDetail.cash.reportPriceChange")}
        </button>
      </div>
      {showReportForm && (
        <form onSubmit={handleSubmitReport} className="mt-5 p-5 rounded-xl bg-[#f5f4f0] border border-[#2D221F]/10 space-y-4">
          <div>
            <h5 className="text-swiss text-[10px] font-black tracking-[0.15em] uppercase text-[#2D221F] mb-1">{t("placeDetail.cash.reportPriceCorrection")}</h5>
            <p className="text-xs text-[#2D221F]/50 font-semibold">{t("placeDetail.cash.reportHint")}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {fields.map((field, i) => (
              <div key={i}>
                <label className="text-swiss text-[9px] font-black tracking-[0.1em] uppercase text-[#2D221F]/40 block mb-1.5">{field.label} (IDR)</label>
                <input
                  type="number"
                  value={field.value}
                  onChange={e => field.setValue(e.target.value)}
                  className="w-full bg-white border border-[#2D221F]/15 rounded-lg px-3 py-2 text-sm text-[#2D221F] focus:outline-none focus:border-[#A3B18A] focus:ring-1 focus:ring-[#A3B18A]/20 transition-all font-semibold"
                  required
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-4 pt-2">
            {submitSuccess ? (
              <span className="text-xs font-black tracking-wider uppercase text-[#A3B18A] font-swiss">{t("placeDetail.cash.submitted")}</span>
            ) : submitError ? (
              <span className="text-xs font-semibold text-rose-600 font-swiss">{submitError}</span>
            ) : (
              <span className="text-xs text-[#2D221F]/40 font-semibold font-swiss">{t("placeDetail.cash.autoAggregated")}</span>
            )}
            <button type="submit" disabled={isSubmitting} className="bg-[#2D221F] hover:bg-[#A3B18A] disabled:bg-[#2D221F]/10 text-white text-[9px] font-black tracking-[0.15em] uppercase px-6 py-3 rounded-full transition-all cursor-pointer">
              {isSubmitting ? t("placeDetail.cash.submitting") : t("placeDetail.cash.submit")}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
