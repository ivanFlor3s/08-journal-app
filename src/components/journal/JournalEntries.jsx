import { useSelector } from "react-redux";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  const { notes } = useSelector((state) => state.notes);

  return (
    <div className="journal__entries">
      {notes.map((note) => {
        return (
          <JournalEntry
            key={note.id}
            //Paso las propiedades de los notes
            {...note}
          >
          </JournalEntry>
        );
      })}
    </div>
  );
};
