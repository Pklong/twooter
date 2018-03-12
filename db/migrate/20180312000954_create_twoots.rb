class CreateTwoots < ActiveRecord::Migration[5.1]
  def change
    create_table :twoots do |t|
      t.text :body, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :twoots, :author_id
  end
end
