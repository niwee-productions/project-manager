<?php

namespace Niwee\ProjectManager\Model;

class Member
{
    private Database $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function selectAll(): array
    {
        return $this->db->select("member", [
            'id',
            'password',
            'is_validated_psw',
            'email',
            'lastname',
            'firstname',
            'tel',
            'specialty_id',
            'theme_id',
            'local_id',
        ], []);
    }

    public function selectById(int $id): array
    {
        return $this->db->select("member", [
            'id',
            'password',
            'is_validated_psw',
            'email',
            'lastname',
            'firstname',
            'tel',
            'specialty_id',
            'theme_id',
            'local_id',
        ], [
            "id[=]" => $id,
        ]);
    }

    public function insert(array $data): void
    {
        $this->db->insert("member", $data);
    }

    public function update(int $id, array $data): void
    {
        $this->db->update("member", $data,
            [
                "id[=]" => $id,
            ]);
    }
}

