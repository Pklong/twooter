class RenameWootsToTwoots < ActiveRecord::Migration[5.0]
  def change
    rename_table :woots, :twoots
  end
end
