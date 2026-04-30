"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MapPin } from "lucide-react";

interface StopAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  allStops: string[];
  iconColor?: string;
  id: string;
}

export default function StopAutocomplete({
  value,
  onChange,
  placeholder,
  allStops,
  iconColor = "text-primary-500",
  id,
}: StopAutocompleteProps) {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Filter stops based on input
  const filtered = value.trim()
    ? allStops.filter((stop) =>
        stop.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 8)
    : [];

  const showDropdown = open && filtered.length > 0;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Reset highlight when filtered results change
  useEffect(() => {
    setHighlightIndex(-1);
  }, [filtered.length]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightIndex >= 0 && listRef.current) {
      const item = listRef.current.children[highlightIndex] as HTMLElement;
      item?.scrollIntoView({ block: "nearest" });
    }
  }, [highlightIndex]);

  const selectStop = useCallback(
    (stop: string) => {
      onChange(stop);
      setOpen(false);
    },
    [onChange]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightIndex >= 0 && highlightIndex < filtered.length) {
        selectStop(filtered[highlightIndex]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Highlight matching text
  const highlightMatch = (text: string) => {
    if (!value.trim()) return text;
    const idx = text.toLowerCase().indexOf(value.toLowerCase());
    if (idx === -1) return text;
    const before = text.slice(0, idx);
    const match = text.slice(idx, idx + value.length);
    const after = text.slice(idx + value.length);
    return (
      <>
        {before}
        <span className="text-primary-600 font-semibold">{match}</span>
        {after}
      </>
    );
  };

  return (
    <div ref={wrapperRef} className="relative">
      <div
        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
          focused
            ? "bg-white ring-2 ring-primary-200 border-primary-300"
            : "bg-slate-50"
        }`}
      >
        <MapPin
          className={`w-4 h-4 shrink-0 transition-colors ${
            focused ? "text-primary-500" : iconColor
          }`}
        />
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            setFocused(true);
            if (value.trim()) setOpen(true);
          }}
          onBlur={() => setFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoComplete="off"
          className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
          role="combobox"
          aria-expanded={showDropdown}
          aria-controls={`${id}-listbox`}
          aria-activedescendant={
            highlightIndex >= 0 ? `${id}-option-${highlightIndex}` : undefined
          }
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
            className="text-slate-400 hover:text-slate-600 transition-colors text-xs"
            aria-label="Clear input"
          >
            ✕
          </button>
        )}
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <ul
          ref={listRef}
          id={`${id}-listbox`}
          role="listbox"
          className="absolute left-0 right-0 top-full mt-1 z-50 bg-white rounded-xl border border-slate-200 shadow-lg max-h-52 overflow-y-auto py-1"
        >
          {filtered.map((stop, i) => (
            <li
              key={stop}
              id={`${id}-option-${i}`}
              role="option"
              aria-selected={highlightIndex === i}
              onMouseDown={(e) => {
                e.preventDefault();
                selectStop(stop);
              }}
              onMouseEnter={() => setHighlightIndex(i)}
              className={`flex items-center gap-3 px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                highlightIndex === i
                  ? "bg-primary-50 text-primary-700"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <MapPin
                className={`w-3.5 h-3.5 shrink-0 ${
                  highlightIndex === i ? "text-primary-500" : "text-slate-400"
                }`}
              />
              <span className="truncate">{highlightMatch(stop)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
