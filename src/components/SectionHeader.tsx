export default function SectionHeader({ title, viewAllLink }: { title: string, viewAllLink?: string }) {
  return (
    <div className="flex items-center justify-between w-full mb-12">
      <h2 className="text-3xl font-medium text-white flex items-center gap-2">
        <span className="text-[#c778dd]">#</span>{title}
        <span className="h-px bg-[#c778dd] w-32 md:w-64 ml-4"></span>
      </h2>
      {viewAllLink && (
        <a href={viewAllLink} className="text-[#abb2bf] hover:text-white transition-colors">
          View all ~~&gt;
        </a>
      )}
    </div>
  );
}
