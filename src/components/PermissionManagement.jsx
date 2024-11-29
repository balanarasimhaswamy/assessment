import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Modal,
  TextField,
} from "@mui/material";

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState([
    { id: 1, name: "Read Access" },
    { id: 2, name: "Write Access" },
    { id: 3, name: "Delete Access" },
  ]);

  const [open, setOpen] = useState(false);
  const [newPermission, setNewPermission] = useState("");

  const handleAddPermission = () => {
    if (newPermission.trim()) {
      setPermissions([...permissions, { id: permissions.length + 1, name: newPermission }]);
      setNewPermission("");
      setOpen(false);
    }
  };

  const handleDeletePermission = (id) => {
    setPermissions(permissions.filter((perm) => perm.id !== id));
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Permission
      </Button>
      <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Permission Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {permissions.map((perm) => (
              <TableRow key={perm.id}>
                <TableCell>{perm.id}</TableCell>
                <TableCell>{perm.name}</TableCell>
                <TableCell>
                  <Button color="secondary" onClick={() => handleDeletePermission(perm.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Paper sx={{ margin: "auto", padding: "20px", maxWidth: "400px", marginTop: "15%" }}>
          <h2>Add New Permission</h2>
          <TextField
            fullWidth
            label="Permission Name"
            value={newPermission}
            onChange={(e) => setNewPermission(e.target.value)}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddPermission}>
            Add
          </Button>
        </Paper>
      </Modal>
    </>
  );
};

export default PermissionManagement;
