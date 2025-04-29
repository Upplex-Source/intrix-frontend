// app/product/page.js (Server Component)
import ClientProductSection from './ClientProductSection'
export async function generateMetadata() {
    return {
      title: "INTRIX One Tap – FONT",
      description: "RM580 · Instant hot water dispenser · ONE TAP series",
      openGraph: {
        title: "INTRIX One Tap – FONT",
        description: "RM580 · The perfect accessory for your INTRIX One Tap · ONE TAP series",
        url: "https://intrixlifestyle.com/product/font",
        type: "website",
        images: [
          {
            url: "https://intrixlifestyle.com/product/facebook/font.png",
            width: 1200,
            height: 630,
            alt: "FONT product image",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "INTRIX One Tap – FONT",
        description: "RM580 · The perfect accessory for your INTRIX One Tap · ONE TAP series",
        images: ["https://intrixlifestyle.com/product/facebook/font.png"],
      },
    };
  }
export default function ProductPage() {
  const product = {
    series: "ONE TAP",
    model: "FONT",
    slug: "font",
    src: "/explore/font.png",
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
