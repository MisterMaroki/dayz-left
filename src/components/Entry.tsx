// Dependency imports
import { Heading, Text } from "@chakra-ui/react";

interface EntryProps {
  id: string;
  title: string;
  date: string;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Entry = (props: EntryProps) => {
  return (
    <section className="flex rounded bg-red-400 p-2 text-white">
      <div>
        <Heading size="lg">{props.title}</Heading>
        <Text fontSize="sm">{props.date}</Text>
      </div>

      <div className="ml-auto mr-2 flex items-center space-x-4 font-bold">
        {/* Days */}
        <span className="flex flex-col items-center">
          <Text fontSize="lg">{props.days}</Text>
          <Text fontSize="xs">d</Text>
        </span>

        {/* Hours */}
        <span className="flex flex-col items-center">
          <Text fontSize="lg">{props.hours}</Text>
          <Text fontSize="xs">h</Text>
        </span>

        {/* Minutes */}
        <span className="flex flex-col items-center">
          <Text fontSize="lg">{props.minutes}</Text>
          <Text fontSize="xs">m</Text>
        </span>

        {/* Seconds */}
        <span className="flex flex-col items-center">
          <Text fontSize="lg">{props.seconds}</Text>
          <Text fontSize="xs">s</Text>
        </span>
      </div>

      <div className="ml-2 flex items-center justify-center">
        <i className="ri-more-2-fill ri-lg"></i>
      </div>
    </section>
  );
};

export default Entry;
