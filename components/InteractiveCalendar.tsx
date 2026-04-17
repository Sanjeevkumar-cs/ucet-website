'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarEvent {
  date: number;
  type: 'holiday' | 'working' | 'event';
  label?: string;
}

interface InteractiveCalendarProps {
  events?: CalendarEvent[];
  onDateSelect?: (date: Date) => void;
}

export default function InteractiveCalendar({ events = [], onDateSelect }: InteractiveCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateClick = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const getEventForDate = (day: number) => {
    return events.find(e => e.date === day);
  };

  const days = [];
  const totalDays = daysInMonth(currentDate);
  const firstDay = firstDayOfMonth(currentDate);

  // Empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Actual days of month
  for (let day = 1; day <= totalDays; day++) {
    days.push(day);
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <div className="flex gap-2">
            <button
              onClick={previousMonth}
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200"
              aria-label="Previous month"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200"
              aria-label="Next month"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>

        {/* Day names */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-sm font-semibold text-gray-600">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => {
            const event = day ? getEventForDate(day) : null;
            const isSelected = selectedDate && day === selectedDate.getDate() && 
                             selectedDate.getMonth() === currentDate.getMonth();
            const isToday = day === new Date().getDate() && 
                          currentDate.getMonth() === new Date().getMonth() &&
                          currentDate.getFullYear() === new Date().getFullYear();

            if (day === null) {
              return <div key={`empty-${index}`} className="aspect-square"></div>;
            }

            return (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                className={`
                  aspect-square rounded-lg font-medium text-sm transition-all duration-200
                  flex items-center justify-center relative
                  ${isSelected 
                    ? 'bg-accent text-white shadow-md scale-105' 
                    : event?.type === 'holiday'
                    ? 'bg-red-50 text-red-700 hover:bg-red-100'
                    : event?.type === 'event'
                    ? 'bg-blue-50 text-primary hover:bg-blue-100'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }
                  ${isToday ? 'ring-2 ring-accent ring-offset-1' : ''}
                `}
              >
                <span>{day}</span>
                {event && (
                  <div className={`
                    absolute bottom-1 w-1.5 h-1.5 rounded-full
                    ${event.type === 'holiday' ? 'bg-red-500' : 'bg-primary'}
                  `}></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="border-t pt-4 space-y-2">
        <div className="text-sm font-semibold text-gray-900 mb-3">Legend</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-100 rounded border border-red-300"></div>
            <span className="text-sm text-gray-600">Holiday (No Classes)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-100 rounded border border-blue-300"></div>
            <span className="text-sm text-gray-600">Working Day / Event</span>
          </div>
        </div>
      </div>
    </div>
  );
}
