<?php

namespace Niwee\ProjectManager\Model;

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

//    public function insert(string $name, string $short_name, string $description): void
//    {
//        $this->db->insert("specialty", [
//            "name" => $name,
//            "short_name" => $short_name,
//            "description" => $description
//        ]);
//    }

    public function insert(array $data): void
    {
        $this->db->insert("specialty", $data);
    }

//    public function update(int $id, string $name, string $short_name, string $description): void
//    {
//        $fields = [];
//        if ($name) {
//            $fields['name'] = $name;
//        }
//        if ($short_name) {
//            $fields['short_name'] = $short_name;
//        }
//        if ($description) {
//            $fields['description'] = $description;
//        }
//        $this->db->update("specialty", $fields,
//            [
//                "id[=]" => $id,
//            ]);
//    }
    public function update(int $id, array $data): void
    {
        $this->db->update("specialty", $data,
            [
                "id[=]" => $id,
            ]);
    }
}

