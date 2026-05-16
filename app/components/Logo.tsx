export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.webp"
      alt="Productdeal"
      className={className}
    />
  );
}
