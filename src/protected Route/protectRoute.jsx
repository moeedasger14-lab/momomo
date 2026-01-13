import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProtectRoute({ children, allowedRoles }) {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user?.id) {
      setAllowed(false);
      setLoading(false);
      return;
    }

    fetch(`http://localhost:60977/api/admin/users/status/${user.id}`)
      .then(res => res.json())
      .then(data => {
        if (
          data.status === "approved" &&
          allowedRoles.includes(data.role)
        ) {
          setAllowed(true);
        } else {
          setAllowed(false);
        }
        setLoading(false);
      })
      .catch(() => {
        setAllowed(false);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  if (!allowed) return <Navigate to="/home" />;

  return children;
}

