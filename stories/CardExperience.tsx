export const DarkLayout = ({
  children,
  props
}: {
  children: any
  props: any
}) => <div className="dark">{children({ ...props })}</div>
