export function SiteFooter() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-3">
          <p className="text-sm font-medium text-slate-700">
            © {new Date().getFullYear()} Flyttivo. Alla rättigheter förbehållna.
          </p>
        </div>
        <p className="text-xs text-slate-500">
          Lokal flyttfirma & städfirma i Skåne – fokus på professionalism,
          trygghet och personlig service.
        </p>
      </div>
    </footer>
  );
}


