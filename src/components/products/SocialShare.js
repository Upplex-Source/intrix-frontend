import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faXTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const SocialShare = ({ product }) => {
  const { series, model, src, price } = product;
  const slug = `${series.toLowerCase().replace(/\s/g, '-')}-${model.toLowerCase().replace(/\s/g, '-')}`;
  const shareUrl = `https://intrix.upplex.com.my/share/${slug}`;
  const text = `Check out the ${series} ${model} for RM${price}!`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(text);

  return (
    <div className="flex gap-4">
      {/* Instagram info */}
      <button
        onClick={() =>
          alert("Instagram doesn't support link sharing directly. Please download and share the image manually.")
        }
        className="cursor-pointer"
      >
        <FontAwesomeIcon icon={faSquareInstagram} />
      </button>
      {/* X (Twitter) */}
      <Link
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faXTwitter} />
      </Link>

      {/* Facebook */}
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </Link>
    </div>
  );
};

export default SocialShare;
