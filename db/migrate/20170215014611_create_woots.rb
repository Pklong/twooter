class CreateWoots < ActiveRecord::Migration[5.0]
  def change
    create_table :woots do |t|
      t.integer :author_id, null: false
      t.string :body, length: 140

      t.timestamps
    end
    add_index :woots, :author_id
  end
end
