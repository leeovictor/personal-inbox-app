import { useState, useEffect, useRef } from 'react';
import { NoteCard, NoteChip } from './components';

interface Note {
  id: string;
  title: string;
  content: string;
  color: 'pink' | 'green' | 'blue' | 'yellow';
}

const sampleNotes: Note[] = [
  {
    id: '1',
    title: 'untitled',
    content: 'here some text of the note\nleonardo victo rmarque',
    color: 'pink',
  },
  {
    id: '2',
    title: 'projeto b - notas importantes',
    content: 'This is the second note with different content',
    color: 'green',
  },
  {
    id: '3',
    title: 'projeto c - planejamento de projeto',
    content: 'Third note content goes here',
    color: 'blue',
  },
  {
    id: '4',
    title: 'projeto d - revisão de código',
    content: 'Fourth note with yellow chip',
    color: 'yellow',
  },
   {
    id: '5',
    title: 'projeto d - revisão de código',
    content: 'Fourth note with yellow chip',
    color: 'yellow',
  },
   {
    id: '6',
    title: 'projeto d - revisão de código',
    content: 'Fourth note with yellow chip',
    color: 'green',
  },
];

export function NoteAppDemo() {
  const [selectedNoteId, setSelectedNoteId] = useState<string>('1');
  const chipsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!e.ctrlKey) return;

      const currentIndex = sampleNotes.findIndex((note) => note.id === selectedNoteId);

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % sampleNotes.length;
        setSelectedNoteId(sampleNotes[nextIndex].id);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + sampleNotes.length) % sampleNotes.length;
        setSelectedNoteId(sampleNotes[prevIndex].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedNoteId]);

  useEffect(() => {
    if (!chipsContainerRef.current) return;

    const activeChip = chipsContainerRef.current.querySelector(
      `[data-note-id="${selectedNoteId}"]`
    ) as HTMLElement;

    if (activeChip) {
      activeChip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
  }, [selectedNoteId]);

  const selectedNote = sampleNotes.find((note) => note.id === selectedNoteId);

  if (!selectedNote) return null;

  return (
    <div className="flex flex-col h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto w-full flex flex-col flex-1 gap-6">
        {/* Large Note Card - stretches to fill available space */}
        <NoteCard 
          title={selectedNote.title} 
          content={selectedNote.content}
          color={selectedNote.color}
          className="flex-1 overflow-y-auto"
        />

        {/* Note Chips - stays at bottom */}
        <div ref={chipsContainerRef} className="flex gap-3 p-3 pb-5 overflow-x-auto">
            {sampleNotes.map((note) => (
            <NoteChip
                key={note.id}
                data-note-id={note.id}
                color={note.color}
                isActive={note.id === selectedNoteId}
                onClick={() => setSelectedNoteId(note.id)}
            >
                {note.title}
            </NoteChip>
            ))}
        </div>
      </div>
    </div>
  );
}
