import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faXTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const SocialShare = ({ product }) => {
    const { series, model, price, slug } = product;
  
    const isMobile = () => {
      if (typeof navigator === "undefined") return false;
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    };
  
    // const slug = `${series.toLowerCase().replace(/\s/g, '-')}-${model.toLowerCase().replace(/\s/g, '-')}`;
    
    const shareUrl = `https://intrixlifestyle.com/product/${slug}`; // 👈 used for actual sharing
    const encodedUrl = encodeURIComponent(shareUrl);
    const text = `Check out the ${series} ${model} for RM${price}!`;
    const encodedText = encodeURIComponent(text);
  
    // Facebook: Share dialog on web / open app on mobile
    const fbWebUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    const fbAppUrl = `fb://facewebmodal/f?href=${fbWebUrl}`;
    const fbShareUrl = isMobile() ? fbAppUrl : fbWebUrl;
  
    return (
      <div className="flex gap-4">
        {/* Instagram (manual notice) */}
        <Link
          href={`https://api.whatsapp.com/send?text=${encodedText}%0A${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </Link>
  
        {/* X / Twitter */}
        <Link
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </Link>
  
        {/* Facebook */}
        <Link
          href={fbWebUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
      </div>
    );
  };
  

export default SocialShare;
