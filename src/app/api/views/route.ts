import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST() {
  try {
    // 1. Fetch the row where id is 1
    const { data, error: fetchError } = await supabase
      .from("analytics")
      .select("views")
      .eq("id", 1)
      .single();

    if (fetchError || !data) throw fetchError;

    const netNewViews = data.views + 1;

    // 2. Update the row with the incremented view value
    const { data: updatedData, error: updateError } = await supabase
      .from("analytics")
      .update({ views: netNewViews })
      .eq("id", 1)
      .select("views")
      .single();

    if (updateError || !updatedData) throw updateError;

    return NextResponse.json({ views: updatedData.views }, { status: 200 });
  } catch (error) {
    console.error("Supabase Database Error:", error);
    return NextResponse.json({ error: "Failed to update logs" }, { status: 500 });
  }
}