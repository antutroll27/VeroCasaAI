import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Value } from '@radix-ui/react-select';


function Room({ selectedRoomType }: { selectedRoomType: (value: string) => void }) {
  

  return (
    <div className='-mt-9' >
      <Select required
       onValueChange={(value: string) => {
         selectedRoomType(value); // Handle the value change here
       }}
      >
        <h3 className='mb-2 font-semibold text-colors-custom-lightpurple'> Choose Room Type *</h3>
      <SelectTrigger className="w-full bg-white">
        <SelectValue placeholder="Room Type   🏠  🛏️" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Rooms</SelectLabel>
          <SelectItem value="BedRoom"> 🛏️  Bed Room</SelectItem>
          <SelectItem value="LivingRoom">🖥️  Living Room</SelectItem>
          <SelectItem value="Kitchen">🍽️  Kitchen</SelectItem>
          <SelectItem value="Toilet">🚿  Toilet/Bathroom</SelectItem>
          <SelectItem value="OfficeSpace">👔  Office Space</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  );
}

export default Room;
