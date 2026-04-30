export type Member = {
  name: string;
  role: string;
  social: string;
  desc: string;
  photo: string;
  show: boolean;
  editing: boolean;
};

export type ModalPurpose = "member" | "teamName";
