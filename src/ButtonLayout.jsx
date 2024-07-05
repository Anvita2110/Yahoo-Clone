export default function ButtonLayout({ title, children }) {
  return (
    <div className="flex gap-2 items-center border-2 text-slate-700 rounded-3xl border-gray-400 p-2 hover:text-blue-600 hover:bg-blue-100/40">
      {children}
      <button>{title}</button>
    </div>
  );
}
