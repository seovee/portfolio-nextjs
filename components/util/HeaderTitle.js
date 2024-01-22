export default function HeaderTitle({ title }) {
  return (
    <h2 className="absolute hidden sm:block top-0 text-center w-full font-thin">
      {title}
    </h2>
  );
}
