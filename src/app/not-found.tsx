export const runtime = "edge";

export default function NotFound() {
  return (
    <div className='w-full min-h-full flex flex-col justify-center items-center pt-10 lg:pt-0'>
      <h1 className="text-7xl font-black bg-linear-90 from-secondary via-tertiary to-quaternary bg-clip-text text-transparent">404</h1>
      <h2 className="text-2xl uppercase">not found</h2>
    </div>

  );
}
