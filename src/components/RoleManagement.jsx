import React, { useState } from "react";
import { Button, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Modal, TextField } from "@mui/material";

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "User", permissions: ["Read"] },
  ]);

  const [open, setOpen] = useState(false);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });

  const handleAddRole = () => {
    setRoles([...roles, { id: roles.length + 1, ...newRole }]);
    setOpen(false);
    setNewRole({ name: "", permissions: [] });
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Role
      </Button>
      <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Role Name</TableCell>
              <TableCell>Permissions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id}>
                <TableCell>{role.id}</TableCell>
                <TableCell>{role.name}</TableCell>
                <TableCell>{role.permissions.join(", ")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Paper sx={{ margin: "auto", padding: "20px", maxWidth: "400px", marginTop: "15%" }}>
          <h2>Add New Role</h2>
          <TextField
            fullWidth
            label="Role Name"
            value={newRole.name}
            onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Permissions (comma-separated)"
            value={newRole.permissions}
            onChange={(e) =>
              setNewRole({ ...newRole, permissions: e.target.value.split(",") })
            }
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddRole}>
            Add
          </Button>
        </Paper>
      </Modal>
    </>
  );
};

export default RoleManagement;
