class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :url
      t.references :song, null: false, foreign_key: true

      t.timestamps
    end
  end
end
