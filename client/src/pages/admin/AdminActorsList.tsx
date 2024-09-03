import AdminManagement from "./AdminManagement";
import ActorsDatabase from "../../database/ActorsDatabase";

const actorColumns = [
  { field: "id", headerName: "Id", width: 50, editable: false },
  { field: "name", headerName: "Name", width: 200, editable: true },
  { field: "born", headerName: "Born", width: 150, editable: true },
  { field: "bornAt", headerName: "Born At", width: 200, editable: true },
  { field: "bio", headerName: "Bio", width: 300, editable: true },
  { field: "height", headerName: "Height", width: 100, editable: true },
  {
    field: "children",
    headerName: "Children",
    width: 200,
    editable: true,
    // valueGetter: (params: any) => params.row.children?.join(", ") || "",
  },
  {
    field: "parents",
    headerName: "Parents",
    width: 200,
    editable: true,
    // valueGetter: (params: any) => params.row.parents?.join(", ") || "",
  },
  {
    field: "otherWorks",
    headerName: "Other Works",
    width: 300,
    editable: true,
  },
  {
    field: "role",
    headerName: "Roles",
    width: 200,
    editable: true,
    // valueGetter: (params: any) => params.row.role?.join(", ") || "",
  },
  {
    field: "photoProfileUrl",
    headerName: "Profile Photo URL",
    width: 250,
    editable: true,
  },
  {
    field: "photos",
    headerName: "Photos",
    width: 250,
    editable: true,
    // valueGetter: (params: any) => params.row.photos?.join(", ") || "",
  },
  {
    field: "awards",
    headerName: "Awards",
    width: 300,
    editable: true,
    // valueGetter: (params: any) => params.row.awards?.join(", ") || "",
  },
];

const initialRows = ActorsDatabase.map((actor, index) => ({
  id: index + 1,
  name: actor.personalDetail.name,
  born: actor.personalDetail.born,
  bornAt: actor.personalDetail.bornAt,
  bio: actor.personalDetail.bio,
  height: actor.personalDetail.height,
  children: actor.personalDetail.children,
  parents: actor.personalDetail.parents,
  otherWorks: actor.personalDetail.otherWorks,
  role: actor.role,
  photoProfileUrl: actor.photoProfileUrl,
  photos: actor.photos,
  awards: actor.awards,
}));

const emptyActorRowTemplate = () => ({
  name: "",
  born: "",
  bornAt: "",
  bio: "",
  height: "",
  children: [],
  parents: [],
  otherWorks: "",
  role: [],
  photoProfileUrl: "",
  photos: [],
  awards: [],
  isNew: true,
});

export default function AdminActorsList() {
  return (
    <AdminManagement
      initialRows={initialRows}
      columns={actorColumns}
      emptyRowTemplate={emptyActorRowTemplate}
    />
  );
}
