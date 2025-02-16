import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useTheme } from "next-themes";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: null,
    end: null,
    location: "",
    description: "",
  });
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(savedEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleOpenDialog = ({ start, end }) => {
    setNewEvent({ title: "", start, end, location: "", description: "" });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewEvent({
      title: "",
      start: null,
      end: null,
      location: "",
      description: "",
    });
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      const updatedEvents = [
        ...events,
        {
          ...newEvent,
          start: new Date(newEvent.start),
          end: new Date(newEvent.end),
        },
      ];
      setEvents(updatedEvents);
    }
    handleClose();
  };

  return (
    <div
      className={`myCustomHeight mt-2 pt-2 ${
        resolvedTheme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleOpenDialog}
        style={{ height: 500 }}
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Make New Appointment</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Event Title"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <TextField
            fullWidth
            margin="dense"
            label="Location"
            value={newEvent.location}
            onChange={(e) =>
              setNewEvent({ ...newEvent, location: e.target.value })
            }
          />
          <TextField
            fullWidth
            margin="dense"
            label="Description"
            value={newEvent.description}
            onChange={(e) =>
              setNewEvent({ ...newEvent, description: e.target.value })
            }
          />
          <TextField
            fullWidth
            margin="dense"
            label="Start Time"
            type="datetime-local"
            value={
              newEvent.start
                ? moment(newEvent.start).format("YYYY-MM-DDTHH:mm")
                : ""
            }
            onChange={(e) =>
              setNewEvent({ ...newEvent, start: new Date(e.target.value) })
            }
          />
          <TextField
            fullWidth
            margin="dense"
            label="End Time"
            type="datetime-local"
            value={
              newEvent.end
                ? moment(newEvent.end).format("YYYY-MM-DDTHH:mm")
                : ""
            }
            onChange={(e) =>
              setNewEvent({ ...newEvent, end: new Date(e.target.value) })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddEvent} color="primary">
            Add Event
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyCalendar;
