import React, { useState, useEffect } from 'react';
import { X, Bell, AlertTriangle } from 'lucide-react';

const NoticeBoard = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentNotice, setCurrentNotice] = useState(0);

  const notices = [
    {
      id: 1,
      title: "NDA 2024 Exam Registration Open",
      message: "Registration for NDA 2024 exam is now open. Last date: 15th March 2024",
      urgent: true,
      date: "2024-02-20"
    },
    {
      id: 2,
      title: "New Batch Starting March 1st",
      message: "New comprehensive batch for CDS preparation starting from March 1st, 2024",
      urgent: false,
      date: "2024-02-18"
    },
    {
      id: 3,
      title: "Free Mock Test Available",
      message: "Free AFCAT mock test available for all registered students",
      urgent: false,
      date: "2024-02-15"
    }
  ];

  useEffect(() => {
    if (notices.length > 1) {
      const interval = setInterval(() => {
        setCurrentNotice((prev) => (prev + 1) % notices.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [notices.length]);

  if (!isVisible || notices.length === 0) return null;

  const notice = notices[currentNotice];

  return (
    <div className={`fixed top-20 left-0 right-0 z-30 ${notice.urgent ? 'bg-red-600' : 'bg-blue-600'} text-white shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1">
          {notice.urgent ? (
            <AlertTriangle className="h-5 w-5 text-yellow-300 animate-pulse" />
          ) : (
            <Bell className="h-5 w-5 text-yellow-300" />
          )}
          <div className="flex-1">
            <h4 className="font-semibold text-sm">{notice.title}</h4>
            <p className="text-sm opacity-90">{notice.message}</p>
          </div>
          {notices.length > 1 && (
            <div className="hidden md:flex space-x-1">
              {notices.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentNotice ? 'bg-yellow-300' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 text-white/80 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default NoticeBoard;