// Segregate props so small components are not forced to accept a "god object".

type UserIdentity = { id: string; name: string };

type UserContact = { email: string; phone: string };

// Bad smell: Avatar only needs id + name but receives full UserContact too.
// type FatUser = UserIdentity & UserContact & { settings: unknown };

type AvatarProps = Pick<UserIdentity, "id" | "name">;

function Avatar({ id, name }: AvatarProps) {
  return <img alt={name} data-user-id={id} src={`/avatars/${id}.png`} />;
}

type ContactLineProps = Pick<UserContact, "email">;

function ContactLine({ email }: ContactLineProps) {
  return <a href={`mailto:${email}`}>{email}</a>;
}

export function InterfaceSegregationDemo() {
  const identity: UserIdentity = { id: "1", name: "Ada" };
  const contact: UserContact = { email: "a@b.com", phone: "+1" };
  return (
    <div>
      <Avatar {...identity} />
      <ContactLine email={contact.email} />
    </div>
  );
}
