<?php

namespace Niwee\ProjectManager;

class Specialty
{
    private Database $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function selectAll(): array
    {
        return $this->db->select("specialty", [
            "id",
            "name",
            "short_name",
            "description",
        ], []);
    }

    public function selectById(int $id): array
    {
        return $this->db->select("specialty", [
            "id",
            "name",
            "short_name",
            "description",
        ], [
            "id[=]" => $id,
        ]);
    }
}

