// app/product/page.js (Server Component)
import ClientProductSection from './ClientProductSection'
export async function generateMetadata() {
    return {
      title: "INTRIX One Tap – FILTER",
      description: "RM580 · INTRIX ALL-IN-ONE REPLACEMENT · ONE TAP series",
      openGraph: {
        title: "INTRIX One Tap – FILTER",
        description: "RM580 · INTRIX ALL-IN-ONE REPLACEMENT · ONE TAP series",
        url: "https://intrixlifestyle.com/product/filter",
        type: "website",
        images: [
          {
            url: "https://intrixlifestyle.com/product/facebook/filter.png",
            width: 1200,
            height: 630,
            alt: "FILTER product image",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "INTRIX One Tap – FILTER",
        description: "RM580 · INTRIX ALL-IN-ONE REPLACEMENT · ONE TAP series",
        images: ["https://intrixlifestyle.com/product/facebook/filter.png"],
      },
    };
  }
export default function ProductPage() {
  const product = {
    series: "ONE TAP",
    model: "FILTER",
    slug: "filter",
    src: "/explore/filter.png",
    paymentPlan: 3,
    price: 580,
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
