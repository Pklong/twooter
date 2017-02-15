class Changeauthoridcolumnname < ActiveRecord::Migration[5.0]
  def change
    rename_column :woots, :author_id, :user_id
  end
end
