import { SEARCH_PARAMS } from "@/shared/settings";
import { HTMLAttributes, ReactNode } from "react";

export interface AnchorLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode,
  className?: string,
  params: SEARCH_PARAMS,
  value: string,
  id: string,
  href: string
}