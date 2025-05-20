import React, { useState } from "react";

export default function App() {
  const [isCopied, setIsCopied] = useState(false);

  const profile = {
    name: "はじめの一歩",
    tagline: "Hop・Step・Jump & Fly away",
  };

  const links = [
    {
      name: "X",
      url: "https://x.com/hazimeno_ipoo ",
      handle: "@hazimeno_ipoo",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 19.5H1.68l7.73-8.835L1.255 2.25H8.08l4.713 6.231z" />
        </svg>
      ),
      color: "bg-black hover:bg-gray-800",
      neon: "hover:shadow-[0_0_10px_#1DA1F2]",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/hazimeno_ipoo ",
      handle: "@hazimeno_ipoo",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.2.6 1.683 1.083a4.904 4.904 0 011.083 1.683c.248.637.415 1.362.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.904 4.904 0 01-1.083 1.683 4.906 4.906 0 01-1.683 1.083c-.637.248-1.362.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.217-2.428-.465a4.904 4.904 0 01-1.683-1.083A4.906 4.906 0 012.683 18.428c-.248-.637-.415-1.362-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.904 4.904 0 011.083-1.683A4.906 4.906 0 015.292 2.683c.637-.248 1.362-.415 2.428-.465C8.786 2.013 9.126 2 12 2zm0 1.808a7.8 7.8 0 100 15.6 7.8 7.8 0 000-15.6zM12 5.768a6.233 6.233 0 110 12.465 6.233 6.233 0 010-12.465zm0 2.808a3.425 3.425 0 100 6.85 3.425 3.425 0 000-6.85z" />
        </svg>
      ),
      color: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600",
      neon: "hover:shadow-[0_0_10px_#FF3864]",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/ @kazutan.1227",
      handle: "@kazutan.1227",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M12.51 3.46c.23-.23.48-.44.72-.64l-.01.01A8.493 8.493 0 0121 10.5c0 .47-.05.94-.14 1.39a4.243 4.243 0 003.59 4.16 4.27 4.27 0 01-1.92.077A4.238 4.238 0 0024 12.33c0-2.36-1.91-4.29-4.28-4.29-.8 0-1.56.24-2.2.66l-.01-.01A4.245 4.245 0 0012.51 3.46zM14.11 6.3a.76.76 0 00-.11 1.51A2.39 2.39 0 0112 10a2.39 2.39 0 01-2-1.05.76.76 0 00-1.28.79A4.01 4.01 0 0012 13a3.99 3.99 0 003.93-3.34.76.76 0 00-.82-.96zM3.49 12a8.49 8.49 0 011.8-5.09A8.53 8.53 0 0110.5 5.1a8.53 8.53 0 015.09 1.81A8.49 8.49 0 0117.4 12a8.49 8.49 0 01-1.8 5.09 8.53 8.53 0 01-5.09 1.81 8.53 8.53 0 01-5.09-1.81A8.49 8.49 0 013.49 12zm6.51 3.23V8.77a.77.77 0 00-1.54 0v6.46a.77.77 0 001.54 0z" />
        </svg>
      ),
      color: "bg-black hover:bg-gray-800",
      neon: "hover:shadow-[0_0_10px_#00F3FF]",
    },
    {
      name: "SUNO",
      url: "https://suno.com/ ",
      handle: "@fieryfantasia963",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M12 2L1 7l11 5 11-5-11-5zM1 17l11 5 11-5M1 12l11 5 11-5" />
        </svg>
      ),
      color: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",
      neon: "hover:shadow-[0_0_10px_#6B46C1]",
    },
    {
      name: "note",
      url: "https://note.com/hajimemakoto ",
      handle: "@hajimemakoto",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M19 5H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zm0 12H5V7h14v10z" />
          <path d="M17 9H7v2h10V9zm0 4H7v2h7v-2z" />
        </svg>
      ),
      color: "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700",
      neon: "hover:shadow-[0_0_10px_#FFA500]",
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-indigo-950 text-white p-4 md:p-6 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-md mx-auto backdrop-blur-lg bg-black/30 rounded-xl shadow-2xl overflow-hidden border border-gray-700 transform transition-all hover:scale-[1.02] duration-300">
        <div className="p-6 sm:p-8">
          {/* 名前とタグライン */}
          <div className="text-center mb-6 sm:mb-8 animate-fadeIn">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              {profile.name}
            </h1>
            <p className="text-sm sm:text-base text-gray-400 mt-1">{profile.tagline}</p>
            <div className="w-20 sm:w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto my-4"></div>
          </div>

          {/* SNSリンク一覧 */}
          <div className="space-y-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                title="新しいタブで開く"
              >
                <div
                  className={`flex items-center justify-between p-3 sm:p-4 rounded-lg ${link.color} text-white transition-all duration-300 hover:-translate-y-1 ${link.neon}`}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="shrink-0">{link.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm sm:text-base truncate">{link.name}</p>
                      <p className="text-xs opacity-90 truncate">{link.handle}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs hidden sm:inline">外部</span>
                    <svg
                      className="w-4 h-4 inline"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* シェアボタン */}
          <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-700">
            <button
              onClick={copyToClipboard}
              className="w-full py-2 px-4 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white rounded-lg text-sm sm:text-base font-medium transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none"
            >
              {isCopied ? "コピーしました！" : "このページを共有"}
            </button>
          </div>
        </div>
      </div>

      {/* フッター */}
      <footer className="mt-8 sm:mt-12 text-center text-gray-500 text-xs sm:text-sm">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </div>
  );
}