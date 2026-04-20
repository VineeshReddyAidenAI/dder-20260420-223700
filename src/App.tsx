import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen w-full flex items-center justify-center bg-[#f5f7fa] font-[Noto_Sans]">
            <div className="text-center p-[32px]">
              <h1 className="text-[24px] font-semibold text-[#212121] mb-[8px]">UOI Demo</h1>
              <p className="text-[16px] text-[#6e6e6e]">No screens selected. Please select screens in Figma to generate pages.</p>
            </div>
          </div>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}