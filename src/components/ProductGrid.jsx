import {
  LayoutPanelLeft, CalendarCheck, PenTool, Archive, Scale, Landmark,
  FileText, Fingerprint, Globe, BookOpen, NotebookPen, Gauge,
  Repeat, ReceiptText, Boxes, ShoppingCart, Users,
} from 'lucide-react'
import { Stagger, StaggerItem } from './Reveal'

const PRODUCT_ICONS = {
  LayoutPanelLeft, CalendarCheck, PenTool, Archive, Scale, Landmark,
  FileText, Fingerprint, Globe, BookOpen, NotebookPen, Gauge,
  Repeat, ReceiptText, Boxes, ShoppingCart, Users,
}

export default function ProductGrid({ productos, columns = 'sm:grid-cols-2' }) {
  return (
    <Stagger className={`grid gap-4 ${columns}`}>
      {productos.map((producto) => {
        const ProductIcon = PRODUCT_ICONS[producto.icon]
        return (
          <StaggerItem key={producto.name}>
            <article className="rounded-2xl border border-surface-line bg-surface p-5 transition-colors hover:border-teal-300">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-50 text-teal-600">
                {ProductIcon ? <ProductIcon size={18} aria-hidden="true" /> : null}
              </span>
              <h3 className="mt-4 font-display text-[15px] font-bold text-navy">
                {producto.name}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
                {producto.desc}
              </p>
            </article>
          </StaggerItem>
        )
      })}
    </Stagger>
  )
}