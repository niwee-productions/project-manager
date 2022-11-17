<?php

namespace Niwee\ProjectManager;

class Category
{
    private Database $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function selectAll(): array
    {
        return $this->db->select("category", [
            "id",
            "name",
            "description",
        ], []);
    }

    public function selectById(int $id): array
    {
        return $this->db->select("category", [
            "id",
            "name",
            "description",
        ], [
            "id[=]" => $id,
        ]);
    }

    public function insert(array $data): void
    {
        $this->db->insert("category", $data);
    }

    public function update(int $id, array $data): void
    {
        $this->db->update("category", $data,
            [
                "id[=]" => $id,
            ]);
    }
}

