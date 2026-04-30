export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#ff5a1f]"></div>
        <p className="mt-4 text-white text-lg">Loading...</p>
      </div>
    </div>
  )
}
