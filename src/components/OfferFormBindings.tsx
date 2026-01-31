"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initOfferForms } from "@/lib/offerForm";

export function OfferFormBindings() {
  const pathname = usePathname();

  useEffect(() => {
    initOfferForms();
  }, [pathname]);

  return null;
}
