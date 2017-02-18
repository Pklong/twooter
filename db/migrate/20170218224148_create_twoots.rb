class CreateTwoots < ActiveRecord::Migration[5.0]
  def change
    create_table :twoots do |t|
      t.integer :user_id, null: false
      t.integer :woot_id, null: false

      t.timestamps
    end
    add_index :twoots, [:user_id, :woot_id], unique: true
  end
end
