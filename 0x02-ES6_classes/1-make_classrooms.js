import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const nums = [19, 20, 34];
  const rooms = [];
  for (const num of nums) {
    rooms.push(new ClassRoom(num));
  }

  return rooms;
}
