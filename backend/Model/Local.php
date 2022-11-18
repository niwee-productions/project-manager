<?php

namespace Niwee\ProjectManager\Model;

class Local
{
    private Database $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function selectAll(): array
    {
        return $this->db->select("local", [
            "id",
            "country_name",
            "country_short",
            "language",
            "language_short",
            "time_zone",
            "utc_time_add",
            "utc_time_add",
        ], []);
    }

    public function selectById(int $id): array
    {
        return $this->db->select("local", [
            "id",
            "country_name",
            "country_short",
            "language",
            "language_short",
            "time_zone",
            "utc_time_add",
            "utc_time_add",
        ], [
            "id[=]" => $id,
        ]);
    }

    public function insert(array $data): void
    {
        $this->db->insert("local", $data);
    }

    public function update(int $id, array $data): void
    {
        $this->db->update("local", $data,
            [
                "id[=]" => $id,
            ]);
    }
}

