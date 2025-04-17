// app/product/page.js (Server Component)
import ClientProductSection from './ClientProductSection'
export async function generateMetadata() {
    return {
      title: "INTRIX One Tap – 5-IN-1",
      description: "RM7,500 · Instant hot water dispenser · ONE TAP series",
      openGraph: {
        title: "INTRIX One Tap – 5-IN-1",
        description: "RM7,500 · Instant hot water dispenser · ONE TAP series",
        url: "https://intrix.upplex.com.my/product/intrix-one-tap-5-in-1",
        type: "website",
        images: [
          {
            url: "https://intrix.upplex.com.my/product/facebook/tap-1.png",
            width: 1200,
            height: 630,
            alt: "5-IN-1 product image",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "INTRIX One Tap – 5-IN-1",
        description: "RM7,500 · Instant hot water dispenser · ONE TAP series",
        images: ["https://intrix.upplex.com.my/product/facebook/tap-1.png"],
      },
    };
  }
export default function ProductPage() {
  const product = {
    series: "ONE TAP",
    model: "5-IN-1",
    slug: "intrix-one-tap-5-in-1",
    src: "/explore/tap-1.png",
    paymentPlan: 1,
    price: 7500,
    colour: 1,
    quantity: 1,
  };

  return (
    <div>
      {/* Render client logic in a separate client component */}
      <ClientProductSection product={product} />
    </div>
  )
}
