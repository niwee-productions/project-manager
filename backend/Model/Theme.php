<?php

namespace Niwee\ProjectManager\Model;

class Theme
{
    private Database $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function selectAll(): array
    {
        return $this->db->select("theme", [
            "id",
            "name",
            "is_default",
            "color_primary",
            "color_secondary",
            "color_font_primary",
            "color_font_secondary",
        ], []);
    }

    public function selectById(int $id): array
    {
        return $this->db->select("theme", [
            "id",
            "name",
            "is_default",
            "color_primary",
            "color_secondary",
            "color_font_primary",
            "color_font_secondary",
        ], [
            "id[=]" => $id,
        ]);
    }

    public function insert(array $data): void
    {
        $this->db->insert("theme", $data);
    }

    public function update(int $id, array $data): void
    {
        $this->db->update("theme", $data,
            [
                "id[=]" => $id,
            ]);
    }
}

