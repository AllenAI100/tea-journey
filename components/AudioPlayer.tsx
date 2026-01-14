'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  // 这里暂时用一个在线的白噪音示例，后续替换为您的真实节目
  const audioUrl = "https://cdn.pixabay.com/download/audio/2022/03/24/audio_c8c8a73467.mp3?filename=pouring-tea-10377.mp3"; 
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', () => setIsPlaying(false));
    
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  return (
    <div className="bg-[#F0EBE3] border border-[#E0D8CC] rounded-2xl p-6 md:p-8 relative overflow-hidden group">
      {/* 装饰性背景 */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#A69078]/5 rounded-full blur-2xl -mr-10 -mt-10"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
        {/* 播放按钮 */}
        <button 
          onClick={togglePlay}
          className="w-16 h-16 flex-shrink-0 bg-[#1A1816] text-[#F6F2EB] rounded-full flex items-center justify-center hover:scale-105 hover:bg-[#3A3634] transition-all duration-300 shadow-lg"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
        </button>

        {/* 信息与进度 */}
        <div className="flex-1 w-full text-center md:text-left">
          <div className="mb-1 text-xs font-serif text-[#A69078] tracking-widest uppercase">
            Coming Soon · Pilot Episode
          </div>
          <h3 className="text-xl font-serif text-[#1A1816] mb-4">
            试听：山泉煮水的声音 (Demo)
          </h3>
          
          {/* 进度条 */}
          <div className="w-full h-1.5 bg-[#D4C8B5] rounded-full overflow-hidden cursor-pointer">
            <div 
              className="h-full bg-[#A69078] transition-all duration-100 ease-linear relative"
              style={{ width: `${progress}%` }}
            >
              {/* 进度条末端的光晕 */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white/50 rounded-full blur-[2px]"></div>
            </div>
          </div>
          
          <div className="flex justify-between text-[10px] text-[#8A8690] mt-2 font-mono">
            <span>00:00</span>
            <span>00:30</span>
          </div>
        </div>

        {/* 音量图标 (装饰) */}
        <div className="hidden md:block text-[#A69078]/50">
          <Volume2 className="w-5 h-5" />
        </div>
      </div>

      <audio ref={audioRef} src={audioUrl} preload="metadata" />
    </div>
  );
}
